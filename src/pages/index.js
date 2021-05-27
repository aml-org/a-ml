import React from 'react';
import Helmet from "react-helmet";
import Editor, {monaco} from '@monaco-editor/react';

const PLAYGROUND_URL = 'https://a.ml/playground/validation.html'

function initMonaco() {
    monaco
        .init()
        .then(monaco => {
            monaco.languages.register({id: 'raml'});
            monaco.languages.setMonarchTokensProvider('raml', {
                numberInteger: /(?:0|[+-]?[0-9]+)/,
                numberFloat: /(?:0|[+-]?[0-9]+)(?:\.[0-9]+)?(?:e[-+][1-9][0-9]*)?/,
                numberOctal: /0o[0-7]+/,
                numberHex: /0x[0-9a-fA-F]+/,
                numberInfinity: /[+-]?\.(?:inf|Inf|INF)/,
                numberNaN: /\.(?:nan|Nan|NAN)/,
                numberDate: /\d{4}-\d\d-\d\d([Tt ]\d\d:\d\d:\d\d(\.\d+)?(( ?[+-]\d\d?(:\d\d)?)|Z)?)?/,
                escapes: /\\(?:[btnfr\\"']|[0-7][0-7]?|[0-3][0-7]{2})/,
                keywords: ["true", "True", "TRUE", "false", "False", "FALSE", "null", "Null", "Null", "~"],
                brackets: [{token: "delimiter.bracket", open: "{", close: "}"}, {
                    token: "delimiter.square",
                    open: "[",
                    close: "]"
                }],

                tokenizer: {
                    root: [
                        [/\/.*(?=:)/, "special"],
                        [/#%.*/, "syntaxTag"],
                        [/![^ ]*/, "tag"],
                        [/#.*/, "rootComment"],
                        {include: "@comment"},
                        {include: "@whitespace"},
                        [/%[^ ]+.*$/, "meta.directive"],
                        [/---/, "operators.directivesEnd"],
                        [/\.{3}/, "operators.documentEnd"],
                        [/[-?:](?= )/, "operators"],
                        {include: "@anchor"},
                        {include: "@tagHandle"},
                        {include: "@flowCollections"},
                        {include: "@blockStyle"},
                        [/@numberInteger(?![ \t]*\S+)/, "number"],
                        [/@numberFloat(?![ \t]*\S+)/, "number.float"],
                        [/@numberOctal(?![ \t]*\S+)/, "number.octal"],
                        [/@numberHex(?![ \t]*\S+)/, "number.hex"],
                        [/@numberInfinity(?![ \t]*\S+)/, "number.infinity"],
                        [/@numberNaN(?![ \t]*\S+)/, "number.nan"],
                        [/@numberDate(?![ \t]*\S+)/, "number.date"],
                        [/(".*?"|'.*?'|.*?)([ \t]*)(:)( |$)/,
                            ["type", "white", "operators", "white"]
                        ],
                        {include: "@flowScalars"},
                        [/.+(?=#)/, {cases: {"@keywords": "keyword", "@default": "string"}}],
                        [/.+$/, {cases: {"@keywords": "keyword", "@default": "string"}}],
                    ],

                    object: [{include: "@whitespace"}, {include: "@comment"}, [/}/, "@brackets", "@pop"], [/,/, "delimiter.comma"], [/:(?= )/, "operators"], [/(?:".*?"|'.*?'|[^,{\[]+?)(?=: )/, "type"], {include: "@flowCollections"}, {include: "@flowScalars"}, {include: "@tagHandle"}, {include: "@anchor"}, {include: "@flowNumber"}, [/[^},]+/, {
                        cases: {
                            "@keywords": "keyword",
                            "@default": "string"
                        }
                    }]],

                    array: [{include: "@whitespace"}, {include: "@comment"}, [/\]/, "@brackets", "@pop"], [/,/, "delimiter.comma"], {include: "@flowCollections"}, {include: "@flowScalars"}, {include: "@tagHandle"}, {include: "@anchor"}, {include: "@flowNumber"}, [/[^\],]+/, {
                        cases: {
                            "@keywords": "keyword",
                            "@default": "string"
                        }
                    }]],

                    multiString: [[/^( +).+$/, "string", "@multiStringContinued.$1"]],

                    multiStringContinued: [[/^( *).+$/, {
                        cases: {
                            "$1==$S2": "string",
                            "@default": {token: "@rematch", next: "@popall"}
                        }
                    }]],

                    whitespace: [[/[ \t\r\n]+/, "white"]],

                    comment: [[/#.*/, "comment"]],

                    flowCollections: [[/\[/, "@brackets", "@array"], [/{/, "@brackets", "@object"]],

                    flowScalars: [[/"([^"\\]|\\.)*$/, "string.invalid"], [/'([^'\\]|\\.)*$/, "string.invalid"], [/'[^']*'/, "string"], [/"/, "string", "@doubleQuotedString"]],

                    doubleQuotedString: [[/[^\\"]+/, "string"], [/@escapes/, "string.escape"], [/\\./, "string.escape.invalid"], [/"/, "string", "@pop"]],

                    blockStyle: [[/[>|][0-9]*[+-]?$/, "operators", "@multiString"]],

                    flowNumber: [[/@numberInteger(?=[ \t]*[,\]}])/, "number"], [/@numberFloat(?=[ \t]*[,\]}])/, "number.float"], [/@numberOctal(?=[ \t]*[,\]}])/, "number.octal"], [/@numberHex(?=[ \t]*[,\]}])/, "number.hex"], [/@numberInfinity(?=[ \t]*[,\]}])/, "number.infinity"], [/@numberNaN(?=[ \t]*[,\]}])/, "number.nan"], [/@numberDate(?=[ \t]*[,\]}])/, "number.date"]],

                    tagHandle: [[/![^ ]*/, "tag"]],

                    anchor: [[/[&*][^ ]+/, "namespace"]]
                }
            });
            monaco.editor.defineTheme('amlTheme', {
                base: 'vs', // vs, hc-black, vs-dark
                inherit: true,
                rules: [{ background: 'EDF9FA' },
                    {token : 'type', foreground: "#5385f3"},
                    {token : 'special', foreground:'#63646a'},
                    {token : 'operators', foreground: "#5385f3"},
                    {token : 'string', foreground: '#63646a'},
                    {token : 'keyword', foreground: '#5385f3'},
                    {token : 'number', foreground: '#b99b5a'},
                    {token : 'syntaxTag', foreground: '#5385f3'},
                    {token : 'tag', foreground: '#63646a'}, // Tags like !include
                    {token : 'rootComment', foreground: '#5385f3'},
                    {token : 'httpMethod', foreground: '#5385f3'}
                ],
                colors: {
                    'editor.foreground': '#FBFBFB',
                    'editor.background': '#FBFBFB',
                    'editor.lineHighlightBackground': '#efefef',
                    'editor.lineHighlightForeground': '#efefef',
                    'editor.selectionBackground': '#efefef',
                    'editor.selectionForeground': '#efefef',
                    'editor.selectionHighlightBackground': '#efefef',
                    'editor.selectionHighlightForeground': '#efefef',
                    'editor.inactiveSelectionBackground': '#efefef',
                    'editor.hoverHighlightBackground': '#efefef',
                    'editor.hoverHighlightForeground': '#efefef',
                    'editorCursor.foreground': '#FBFBFB',
                    'editorLineNumber.foreground': '#FBFBFB',
                    'input.background': '#FBFBFB'
                }
            });
            monaco.editor.setTheme('amlTheme');
        })
        .catch(error => console.error('An error occurred during initialization of Monaco: ', error));
}

function handleEditorDidMount(_, editor) {
    initMonaco()
}

const editorOptions = {
    language: "raml",
    theme: "amlTheme",
    scrollBeyondLastLine: false,
    renderIndentGuides: false,
    overviewRulerBorder: false,
    folding: false,
    lineHeight: 20,
    renderLineHighlight: "none",
    readOnly: true,
    links: false,
    minimap: {
        enabled: false
    },
    tabSize: 2,
    fontFamily: 'Roboto Mono',
    fontWeight: 500
}

const editorStyle = {width: "100%", height: "519px", float: "left"}

const dialectCode = `
#%Dialect 1.0

dialect: Kubernetes Pod
version: 1.0

external:
  schema-org: http://schema.org/

documents:
  root:
    encodes: DescriptionDataNode

nodeMappings:
  DescriptionDataNode:
    classTerm: schema-org.APIReference
    mapping:
      apiVersion:
        propertyTerm: schema-org.assemblyVersion
        range: string
        mandatory: true
      kind:
        propertyTerm: schema-org.name
        range: string
        mandatory: true
      metadata:
        propertyTerm: schema-org.about
        range: MetadataNode
        mandatory: true
      spec:
        propertyTerm: schema-org.mainEntity
        range: SpecNode
        mandatory: true

  MetadataNode:
    classTerm: schema-org.Intangible
    mapping:
      name:
        propertyTerm: schema-org.name
        range: string # Try making it a "number"
        mandatory: true

  SpecNode:
    classTerm: schema-org.Intangible
    mapping:
      restartPolicy: # Try removing this property block
        propertyTerm: schema-org.description
        range: string
        mandatory: true
      volumes:
        propertyTerm: schema-org.about
        range: VolumeNode
        allowMultiple: true
      containers:
        propertyTerm: schema-org.mainEntity
        range: ContainerNode
        allowMultiple: true

  VolumeNode:
    classTerm: schema-org.Intangible
    mapping:
      name:
        propertyTerm: schema-org.name
        range: string
        mandatory: true
      emptyDir:
        propertyTerm: schema-org.desctiption
        range: EmptydirNode
        mandatory: true

  EmptydirNode:
    classTerm: schema-org.Intangible
    mapping:
      medium:
        propertyTerm: schema-org.name
        range: string

  ContainerNode:
    classTerm: schema-org.Intangible
    mapping:
      name:
        propertyTerm: schema-org.name
        range: string
        mandatory: true
      image:
        propertyTerm: schema-org.description
        range: string
        mandatory: true
      volumeMounts:
        propertyTerm: schema-org.about
        range: MountNode
        allowMultiple: true
        mandatory: true
      command:
        propertyTerm: schema-org.text
        range: string
        allowMultiple: true
      args:
        propertyTerm: schema-org.text
        range: string
        allowMultiple: true

  MountNode:
    classTerm: schema-org.Intangible
    mapping:
      name:
        propertyTerm: schema-org.name
        range: string
        mandatory: true
      mountPath:
        propertyTerm: schema-org.text
        range: string
        mandatory: true
`.trim()

const documentCode = `
#%Kubernetes Pod 1.0

apiVersion: v1
kind: Pod
metadata:
  name: two-containers # Try making this an integer

spec:
  restartPolicy: never # Try deleting this line
  volumes:
    - name: shared-data
      emptyDir: {}
    - name: private-data
      emptyDir:
        medium: first-container
  containers:
    - name: nginx-container
      image: nginx
      volumeMounts:
        - name: shared-data
          mountPath: /usr/share/nginx/html
    - name: debian-container
      image: debian
      volumeMounts:
        - name: shared-data
          mountPath: /pod-data
        - name: private-data
          mountPath: /pod-private-data
      command: ["/bin/sh"]
      args: ["-c", "echo Hello > /pod-data/index.html"]
`.trim()

const Footer = () =>
    <footer>
        <div className="container footer-sec">
            <div className="row">
                <div className="col-md-8 col-sm-12 footer-menu">
                    <a className="navbar-brand" href="/"><img src="img/images/AML_white.svg"/></a>
                    <ul>
                        <li><a href="docs">Documentation</a></li>
                        <li><a href="https://aml-org.github.io/aml-spec/vocabularies/">Specification</a></li>
                        <li>
                            <button className="ot-sdk-show-settings optanon-toggle-display removable"
                                    data-ignore-geolocation="true" id="ot-sdk-btn">Cookie preferences
                            </button>
                        </li>
                    </ul>
                </div>
                <div className="col-md-4 col-sm-12">
                    <a href="#" className="top_btn">Back to the Top <i className="fas fa-chevron-up"/></a>
                </div>
                <div className="col-lg-12 col-md-12">
                    <p>&copy; {new Date().getFullYear()} MuleSoft, LLC, a Salesforce company</p>
                </div>
            </div>
        </div>
    </footer>

const Header = () =>
    <header>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css"/>
        <link rel="preconnect" href="https://fonts.gstatic.com"/>
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700;900&display=swap"
              rel="stylesheet"/>
        <link href="https://fonts.googleapis.com/css2?family=Roboto+Mono&display=swap" rel="stylesheet"/>
        <Helmet>
            <title>Welcome | AML</title>
        </Helmet>
        <nav className="nav-container navbar-expand-md navbar-dark">
            <h1><a className="navbar-brand" href="/"><img src="img/images/AML_white.svg" alt="logo"/></a></h1>
            <button className="navbar-toggler" type="button" data-toggle="collapse"
                    data-target="#collapsibleNavbar">
                <span className="navbar-toggler-icon"/>
            </button>
            <div className="collapse navbar-collapse" id="collapsibleNavbar">
                <ul className="navbar-nav justify-content-end">
                    <li>
                        <a href="/">
                            <img className="d-sm-block d-lg-none d-md-none nav-logo"
                                 src="img/images/AML_white.svg"/></a>
                        <a href="https://github.com/aml-org" target="__blank"><i className="fab fa-github"/></a>
                    </li>

                    <li className="nav-item dropdown">
                        <a className="nav-link" target="__blank"
                           href="https://aml-org.github.io/aml-spec/vocabularies/">Specification</a>
                    </li>
                    <li className="nav-item"><a className="nav-link"
                                                href="docs">Documentation</a></li>
                </ul>
            </div>
        </nav>

        <section className="tophead-banner">
            <div className="container text-center tophead-content">
                <div className="row">
                    <div className="col-md-12 col-sm-12">
                        <h2>Standards and tools to define, parse and link metadata</h2>
                        <div className="buttons">
                            <a href={PLAYGROUND_URL} target="__blank" className="btn btn-primary try-it-out-btn">Try
                                It Out <i
                                    className="fas fa-expand"/></a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <hr style={{margin: "0 auto"}}/>
    </header>

const FeaturesRow = () =>
    <section className="features-sec">
        <div className="container text-center">
            <div className="row">
                <div className="col-lg-4 col-md-4">
                    <img src="img/images/file-1.svg"/>
                    <h3>Designed for Connectivity</h3>
                    <p>Align the semantics of different formats and link documents in a single unified metadata
                        graph.</p>
                </div>
                <div className="col-lg-4 col-md-4">
                    <img src="img/images/file-2.svg"/>
                    <h3>Extensive Tooling</h3>
                    <p>Use libraries to parse, generate, validate, publish, store and query metadata defined
                        with
                        AML.</p>
                </div>
                <div className="col-lg-4 col-md-4">
                    <img src="img/images/file.svg"/>
                    <h3>Standards Compliant</h3>
                    <p>AML is compliant with W3C standards for semantics, linked data and the related ecosystem
                        of
                        tools.</p>
                </div>
            </div>
        </div>
    </section>

const Editors = () =>
    <section>
        <div className="container-fluid aml-editors-container d-none d-sm-block">
            <div className="row aml-editors-container-inner">
                <div className="editor-1" style={{float: "left", width: "50%"}}>
                    <h3>Dialect</h3>
                    <div className="col-md-12 col-sm-12 editor-block padd_00">
                        <div id="dialect-container" style={editorStyle}>
                            <Editor
                                value={dialectCode}
                                options={editorOptions}
                                editorDidMount={handleEditorDidMount}
                            />
                        </div>
                    </div>
                </div>
                <div className="editor-2" style={{float: "left", width: "50%"}}>
                    <h3>Document</h3>
                    <div className="col-md-12 col-sm-12 editor-block padd_00">
                        <div id="document-container" style={editorStyle}>
                            <Editor
                                value={documentCode}
                                options={editorOptions}
                                editorDidMount={handleEditorDidMount}
                            />
                        </div>
                    </div>
                </div>
            </div>
            <a className="pull-right d-sm-none d-md-block playground-btn try-it-out-btn"
               href={PLAYGROUND_URL} target="__blank">
                Try It Out <i className="fas fa-expand"/></a>
        </div>
    </section>

const AmlBlocks = () =>
    <section className="aml-blocks">
        <div className="container txt-block">
            <div className="row">
                <h2 className="w-100 pl-3">Unified Metadata Graph</h2>
                <div className="col-md-6 col-sm-6 col-lg-6 left-txt">
                    <p>Metadata is a key element in any organization. Unfortunately, different formats and lack
                        of
                        explicit links keep metadata from different systems and tools disconnected and
                        incompatible.</p>
                    <a className="btn btn-primary" href="https://github.com/aml-org/vocabularies">Browse
                        Vocabularies</a>
                </div>
                <div className="col-md-6 col-sm-6 col-lg-6 right-txt">
                    <p><a href="https://aml-org.github.io/docbook/overview_aml.html">AML (Anything Modeling
                        Language)</a> can be used to describe existing YAML/JSON metadata formats or design new
                        ones,
                        providing common semantics and linking the information into a single unified graph of
                        metadata.
                    </p>
                </div>
            </div>
        </div>
        <div className="row-bg-color">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 col-sm-6 col-lg-6 left-txt">
                        <img className="img-fluid" src="img/images/example.png"/>
                    </div>
                    <div className="col-md-6 col-sm-6 col-lg-6 right-txt">
                        <h2>Batteries Included</h2>
                        <p><a href="https://github.com/aml-org/amf">AMF</a> is an open-source programming
                            framework,
                            capable of parsing, generating and validating metadata documents defined using AML.
                            It can
                            be used as a library in JVM or JavaScript projects, or as a stand-alone command-line
                            tool.
                        </p>
                        <p>The modular design of AMF facilitates creating plugins capable of parsing other
                            metadata
                            syntaxes not defined by AML.</p>
                        <a className="btn btn-primary" href="https://github.com/aml-org/amf">Install AMF</a>
                    </div>
                </div>
            </div>
        </div>
    </section>

const Home = () =>
    <div className="landing">
        <Header/>

        <FeaturesRow/>

        <Editors/>

        <AmlBlocks/>

        <Footer/>
    </div>


export default Home;
