const hoverUtils = {

  // Generic description returned when no description for parent block
  // is found or root elements like "title:" are hovered over.
  genericDesc: 'TODO',

  // Pairs of [regex, desc] where:
  //   regex: regular expression to match line content against;
  //   desc: description to display in a tooltip if line content matches regexp.
  descRegexps: [
    [/^dialect:/, 'This is dialect'],
    [/^apiVersion:/, 'This is apiVersion']
  ],

  // Monaco editor decorations
  decorations: [],

  /**
   * Loads languages to make syntax highlighting work in tooltips.
   * https://github.com/microsoft/monaco-editor/issues/812#issuecomment-380709445
   *
   * @param {Array<string>} languages - Languages to load.
   */
  loadLanguages: function (...languages) {
    languages.forEach(language => {
      monaco.editor.createModel('', language).dispose()
    })
  },

  /**
   * Hover Provider "provideHover" method for Monaco.
   *
   * @param   {monaco.editor.ITextModel} model - Editor text model.
   * @param   {monaco.Position} model - A position in the editor.
   * @returns {ProviderResult<Hover>} - Range and contents of a tooltip.
   */
  provideHover: function (model, position) {
    let [desc, blockStartLineNum] = this.findBlockDescription(
      model, position.lineNumber)
    if (!desc) { return }
    if (typeof desc === 'function') {
      desc = desc.call(this, model.getLineContent(position.lineNumber))
    } else {
      desc = Promise.resolve(desc)
    }
    return desc.then(descVal => {
      const blockEndLineNum = this.findBlockLastLineNum(
        model, blockStartLineNum, blockStartLineNum + 1)
      const range = new monaco.Range(
        blockStartLineNum, model.getLineMinColumn(blockStartLineNum),
        blockEndLineNum, model.getLineMaxColumn(blockEndLineNum)
      )
      this.decorations = model.deltaDecorations(this.decorations, [
        {
          range: range,
          options: {
            linesDecorationsClassName: 'selected-line-editor-decoration',
            isWholeLine: true
          }
        }
      ])
      return {
        contents: [
          { value: descVal }
        ]
      }
    })
  },

  /**
   * Finds line description by comparing line content and its parent
   * lines content agains regexps from `this.descRegexps`.
   *
   * @param   {monaco.editor.ITextModel} model - Editor text model.
   * @param   {number} blockStartLineNum - Line number which is being hovered over.
   * @returns {Array<string, number>} - [description, block first line number].
   */
  findBlockDescription: function (model, blockStartLineNum) {
    if (blockStartLineNum <= 1) {
      return [this.genericDesc, blockStartLineNum]
    }
    const lineContent = (model.getLineContent(blockStartLineNum) || '').trim()
    for (var [re, desc] of this.descRegexps) {
      if (RegExp(re).test(lineContent)) {
        return [desc, blockStartLineNum]
      }
    }
    const nextLineNum = this.findParentBlockFirstLineNum(
      model, blockStartLineNum, blockStartLineNum - 1)
    return this.findBlockDescription(model, nextLineNum)
  },

  /**
   * Finds particular line's parent block's first line number.
   * Line B is considered to be a parent of line A if line B contains
   * less whitespaces than the line A.
   *
   * @param  {monaco.editor.ITextModel} model - Editor text model.
   * @param  {number} lineNum - Line number to find parent for.
   * @param  {number} lookupLineNum - Line to perform lookup at.
   * @returns {number} - Parent line number.
   */
  findParentBlockFirstLineNum: function (model, lineNum, lookupLineNum) {
    const minLine = 1
    if (lookupLineNum <= minLine || lineNum <= minLine) {
      return minLine
    }
    const lineWsNum = this.getLineWsCount(model, lineNum)
    if (lineWsNum === 0) {
      return minLine
    }

    const lookupLineWsNum = this.getLineWsCount(model, lookupLineNum)

    return lookupLineWsNum < lineWsNum
      ? lookupLineNum
      : this.findParentBlockFirstLineNum(model, lineNum, lookupLineNum - 1)
  },

  /**
   * Finds block's last line number.
   * Lookup is done by fiding a number of next block first line and
   * returning a previous line number.
   * Having block's first line A, line B is considered the next block
   * first if it contains less or equal number of whitespace.
   *
   * @param  {monaco.editor.ITextModel} model - Editor text model.
   * @param  {number} firstLineNum - Block first line number.
   * @param  {number} lookupLineNum - Line to perform lookup at.
   * @returns {number} - Block last line number.
   */
  findBlockLastLineNum: function (model, firstLineNum, lookupLineNum) {
    const minLine = 1
    const maxLine = model.getLineCount()
    if (lookupLineNum >= maxLine ||
        firstLineNum >= maxLine ||
        firstLineNum <= minLine) {
      return maxLine
    }

    const firstLineWsNum = this.getLineWsCount(model, firstLineNum)
    const lookupLineWsNum = this.getLineWsCount(model, lookupLineNum)

    return lookupLineWsNum <= firstLineWsNum
      // Do not include found line because it's a start of the next block
      ? lookupLineNum - 1
      : this.findBlockLastLineNum(model, firstLineNum, lookupLineNum + 1)
  },

  /**
   * Get whitespaces count of the line.
   *
   * @param  {monaco.editor.ITextModel} model - Editor text model.
   * @param  {number} lineNum - Line number.
   * @returns {number} - Number of whitespaces on the line.
   */
  getLineWsCount: function (model, lineNum) {
    const lineCont = model.getLineContent(lineNum)
    return lineCont.length - lineCont.trim().length
  },

  /**
   * Requests url and returns response body text.
   *
   * @param {string} url - Url from which text response should be fetched.
   * @returns {Promise<string>} - Response body text.
   */
  fetchText: function (url) {
    return fetch(url).then(resp => resp.text())
  },

  /**
   * Loads reference content.
   *
   * @param {string} lineContent - Content of a line which contains ref.
   * @param {string} defaultDesc - Default description.
   * @returns {Promise<string>} - Formatted ref content or default description.
   */
  loadRefContent: function (lineContent, defaultDesc) {
    const url = this.parseUrl(lineContent)
    if (url.length < 1) {
      return Promise.resolve(defaultDesc)
    }
    return this.fetchText(url).then(text => {
      let ext = url.split('.').pop()
      if (ext === 'xsd') {
        ext = 'xml'
      }
      return '```' + ext + '\n' + text + '\n```'
    })
  },

  /**
   * Parses absolute url from line content.
   *
   * @param {string} lineContent - Content of a line.
   * @returns {string} - Absolute url.
   */
  parseUrl: function (lineContent) {
    let url = lineContent.trim().split(' ').pop()
    if (!url.startsWith('http')) {
      const urlObj = new URL(window.location.origin)
      urlObj.pathname = url
      return urlObj.href
    }
    return url
  },

  /**
   * Link Provider "provideLinks" method for Monaco.
   *
   * @param   {monaco.editor.ITextModel} model - Editor text model.
   * @returns {ProviderResult<ILinksList>} - Range and contents of a tooltip.
   */
  provideLinks: function (model) {
    const re = /\S+(.raml|.yaml|.json|.xml|.xsd|.txt|.aml)$/
    const matches = model.findMatches(re, false, true)
    const links = matches.map(m => {
      let lineCont = model.getLineContent(m.range.startLineNumber)
      return {
        range: m.range,
        url: this.parseUrl(lineCont)
      }
    })
    return {links: links}
  }
}
