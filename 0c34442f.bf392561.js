(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{112:function(e,t,n){"use strict";var a=n(0),o=n(116);t.a=function(){var e=Object(a.useContext)(o.a);if(null==e)throw new Error("`useThemeContext` is used outside of `Layout` Component. See https://v2.docusaurus.io/docs/theme-classic#usethemecontext.");return e}},113:function(e,t,n){"use strict";const a=(e,{target:t=document.body}={})=>{const n=document.createElement("textarea"),a=document.activeElement;n.value=e,n.setAttribute("readonly",""),n.style.contain="strict",n.style.position="absolute",n.style.left="-9999px",n.style.fontSize="12pt";const o=document.getSelection();let r=!1;o.rangeCount>0&&(r=o.getRangeAt(0)),t.append(n),n.select(),n.selectionStart=0,n.selectionEnd=e.length;let s=!1;try{s=document.execCommand("copy")}catch(l){}return n.remove(),r&&(o.removeAllRanges(),o.addRange(r)),a&&a.focus(),s};e.exports=a,e.exports.default=a},114:function(e,t){function n(e){let t,n=[];for(let a of e.split(",").map((e=>e.trim())))if(/^-?\d+$/.test(a))n.push(parseInt(a,10));else if(t=a.match(/^(-?\d+)(-|\.\.\.?|\u2025|\u2026|\u22EF)(-?\d+)$/)){let[e,a,o,r]=t;if(a&&r){a=parseInt(a),r=parseInt(r);const e=a<r?1:-1;"-"!==o&&".."!==o&&"\u2025"!==o||(r+=e);for(let t=a;t!==r;t+=e)n.push(t)}}return n}t.default=n,e.exports=n},115:function(e,t,n){"use strict";var a=n(3),o=n(0),r=n.n(o),s=n(109),l={plain:{backgroundColor:"#2a2734",color:"#9a86fd"},styles:[{types:["comment","prolog","doctype","cdata","punctuation"],style:{color:"#6c6783"}},{types:["namespace"],style:{opacity:.7}},{types:["tag","operator","number"],style:{color:"#e09142"}},{types:["property","function"],style:{color:"#9a86fd"}},{types:["tag-id","selector","atrule-id"],style:{color:"#eeebff"}},{types:["attr-name"],style:{color:"#c4b9fe"}},{types:["boolean","string","entity","url","attr-value","keyword","control","directive","unit","statement","regex","at-rule","placeholder","variable"],style:{color:"#ffcc99"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"#c4b9fe"}}]},c={Prism:n(20).a,theme:l};function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function u(){return(u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var p=/\r\n|\r|\n/,d=function(e){0===e.length?e.push({types:["plain"],content:"",empty:!0}):1===e.length&&""===e[0].content&&(e[0].empty=!0)},m=function(e,t){var n=e.length;return n>0&&e[n-1]===t?e:e.concat(t)},y=function(e,t){var n=e.plain,a=Object.create(null),o=e.styles.reduce((function(e,n){var a=n.languages,o=n.style;return a&&!a.includes(t)||n.types.forEach((function(t){var n=u({},e[t],o);e[t]=n})),e}),a);return o.root=n,o.plain=u({},n,{backgroundColor:null}),o};function h(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&-1===t.indexOf(a)&&(n[a]=e[a]);return n}var f=function(e){function t(){for(var t=this,n=[],a=arguments.length;a--;)n[a]=arguments[a];e.apply(this,n),i(this,"getThemeDict",(function(e){if(void 0!==t.themeDict&&e.theme===t.prevTheme&&e.language===t.prevLanguage)return t.themeDict;t.prevTheme=e.theme,t.prevLanguage=e.language;var n=e.theme?y(e.theme,e.language):void 0;return t.themeDict=n})),i(this,"getLineProps",(function(e){var n=e.key,a=e.className,o=e.style,r=u({},h(e,["key","className","style","line"]),{className:"token-line",style:void 0,key:void 0}),s=t.getThemeDict(t.props);return void 0!==s&&(r.style=s.plain),void 0!==o&&(r.style=void 0!==r.style?u({},r.style,o):o),void 0!==n&&(r.key=n),a&&(r.className+=" "+a),r})),i(this,"getStyleForToken",(function(e){var n=e.types,a=e.empty,o=n.length,r=t.getThemeDict(t.props);if(void 0!==r){if(1===o&&"plain"===n[0])return a?{display:"inline-block"}:void 0;if(1===o&&!a)return r[n[0]];var s=a?{display:"inline-block"}:{},l=n.map((function(e){return r[e]}));return Object.assign.apply(Object,[s].concat(l))}})),i(this,"getTokenProps",(function(e){var n=e.key,a=e.className,o=e.style,r=e.token,s=u({},h(e,["key","className","style","token"]),{className:"token "+r.types.join(" "),children:r.content,style:t.getStyleForToken(r),key:void 0});return void 0!==o&&(s.style=void 0!==s.style?u({},s.style,o):o),void 0!==n&&(s.key=n),a&&(s.className+=" "+a),s}))}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.render=function(){var e=this.props,t=e.Prism,n=e.language,a=e.code,o=e.children,r=this.getThemeDict(this.props),s=t.languages[n];return o({tokens:function(e){for(var t=[[]],n=[e],a=[0],o=[e.length],r=0,s=0,l=[],c=[l];s>-1;){for(;(r=a[s]++)<o[s];){var i=void 0,u=t[s],y=n[s][r];if("string"==typeof y?(u=s>0?u:["plain"],i=y):(u=m(u,y.type),y.alias&&(u=m(u,y.alias)),i=y.content),"string"==typeof i){var h=i.split(p),f=h.length;l.push({types:u,content:h[0]});for(var v=1;v<f;v++)d(l),c.push(l=[]),l.push({types:u,content:h[v]})}else s++,t.push(u),n.push(i),a.push(0),o.push(i.length)}s--,t.pop(),n.pop(),a.pop(),o.pop()}return d(l),c}(void 0!==s?t.tokenize(a,s,n):[a]),className:"prism-code language-"+n,style:void 0!==r?r.root:{},getLineProps:this.getLineProps,getTokenProps:this.getTokenProps})},t}(o.Component),v=n(113),g=n.n(v),b=n(114),j=n.n(b),k={plain:{color:"#bfc7d5",backgroundColor:"#292d3e"},styles:[{types:["comment"],style:{color:"rgb(105, 112, 152)",fontStyle:"italic"}},{types:["string","inserted"],style:{color:"rgb(195, 232, 141)"}},{types:["number"],style:{color:"rgb(247, 140, 108)"}},{types:["builtin","char","constant","function"],style:{color:"rgb(130, 170, 255)"}},{types:["punctuation","selector"],style:{color:"rgb(199, 146, 234)"}},{types:["variable"],style:{color:"rgb(191, 199, 213)"}},{types:["class-name","attr-name"],style:{color:"rgb(255, 203, 107)"}},{types:["tag","deleted"],style:{color:"rgb(255, 85, 114)"}},{types:["operator"],style:{color:"rgb(137, 221, 255)"}},{types:["boolean"],style:{color:"rgb(255, 88, 116)"}},{types:["keyword"],style:{fontStyle:"italic"}},{types:["doctype"],style:{color:"rgb(199, 146, 234)",fontStyle:"italic"}},{types:["namespace"],style:{color:"rgb(178, 204, 214)"}},{types:["url"],style:{color:"rgb(221, 221, 221)"}}]},O=n(112),x=n(108),T=function(){var e=Object(x.useThemeConfig)().prism,t=Object(O.a)().isDarkTheme,n=e.theme||k,a=e.darkTheme||n;return t?a:n},E=n(54),C=n.n(E),N=/{([\d,-]+)}/,w=function(e){void 0===e&&(e=["js","jsBlock","jsx","python","html"]);var t={js:{start:"\\/\\/",end:""},jsBlock:{start:"\\/\\*",end:"\\*\\/"},jsx:{start:"\\{\\s*\\/\\*",end:"\\*\\/\\s*\\}"},python:{start:"#",end:""},html:{start:"\x3c!--",end:"--\x3e"}},n=["highlight-next-line","highlight-start","highlight-end"].join("|"),a=e.map((function(e){return"(?:"+t[e].start+"\\s*("+n+")\\s*"+t[e].end+")"})).join("|");return new RegExp("^\\s*(?:"+a+")\\s*$")},S=/(?:title=")(.*)(?:")/;t.a=function(e){var t=e.children,n=e.className,l=e.metastring,i=Object(x.useThemeConfig)().prism,u=Object(o.useState)(!1),p=u[0],d=u[1],m=Object(o.useState)(!1),y=m[0],h=m[1];Object(o.useEffect)((function(){h(!0)}),[]);var v=Object(o.useRef)(null),b=[],k="",O=T(),E=Array.isArray(t)?t.join(""):t;if(l&&N.test(l)){var D=l.match(N)[1];b=j()(D).filter((function(e){return e>0}))}l&&S.test(l)&&(k=l.match(S)[1]);var L=n&&n.replace(/language-/,"");!L&&i.defaultLanguage&&(L=i.defaultLanguage);var _=E.replace(/\n$/,"");if(0===b.length&&void 0!==L){for(var P,B="",A=function(e){switch(e){case"js":case"javascript":case"ts":case"typescript":return w(["js","jsBlock"]);case"jsx":case"tsx":return w(["js","jsBlock","jsx"]);case"html":return w(["js","jsBlock","html"]);case"python":case"py":return w(["python"]);default:return w()}}(L),I=E.replace(/\n$/,"").split("\n"),M=0;M<I.length;){var V=M+1,F=I[M].match(A);if(null!==F){switch(F.slice(1).reduce((function(e,t){return e||t}),void 0)){case"highlight-next-line":B+=V+",";break;case"highlight-start":P=V;break;case"highlight-end":B+=P+"-"+(V-1)+","}I.splice(M,1)}else M+=1}b=j()(B),_=I.join("\n")}var R=function(){g()(_),d(!0),setTimeout((function(){return d(!1)}),2e3)};return r.a.createElement(f,Object(a.a)({},c,{key:String(y),theme:O,code:_,language:L}),(function(e){var t,n=e.className,o=e.style,l=e.tokens,c=e.getLineProps,i=e.getTokenProps;return r.a.createElement(r.a.Fragment,null,k&&r.a.createElement("div",{style:o,className:C.a.codeBlockTitle},k),r.a.createElement("div",{className:C.a.codeBlockContent},r.a.createElement("div",{tabIndex:0,className:Object(s.a)(n,C.a.codeBlock,"thin-scrollbar",(t={},t[C.a.codeBlockWithTitle]=k,t))},r.a.createElement("div",{className:C.a.codeBlockLines,style:o},l.map((function(e,t){1===e.length&&""===e[0].content&&(e[0].content="\n");var n=c({line:e,key:t});return b.includes(t+1)&&(n.className=n.className+" docusaurus-highlight-code-line"),r.a.createElement("div",Object(a.a)({key:t},n),e.map((function(e,t){return r.a.createElement("span",Object(a.a)({key:t},i({token:e,key:t})))})))})))),r.a.createElement("button",{ref:v,type:"button","aria-label":"Copy code to clipboard",className:Object(s.a)(C.a.copyButton),onClick:R},p?"Copied":"Copy")))}))}},116:function(e,t,n){"use strict";var a=n(0),o=n.n(a).a.createContext(void 0);t.a=o},117:function(e,t,n){"use strict";var a=n(0),o=n.n(a),r=n(121),s=n(109),l=n(55),c=n.n(l),i=37,u=39;t.a=function(e){var t=e.lazy,n=e.block,l=e.defaultValue,p=e.values,d=e.groupId,m=e.className,y=Object(r.a)(),h=y.tabGroupChoices,f=y.setTabGroupChoices,v=Object(a.useState)(l),g=v[0],b=v[1],j=a.Children.toArray(e.children);if(null!=d){var k=h[d];null!=k&&k!==g&&p.some((function(e){return e.value===k}))&&b(k)}var O=function(e){b(e),null!=d&&f(d,e)},x=[];return o.a.createElement("div",null,o.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(s.a)("tabs",{"tabs--block":n},m)},p.map((function(e){var t=e.value,n=e.label;return o.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":g===t,className:Object(s.a)("tabs__item",c.a.tabItem,{"tabs__item--active":g===t}),key:t,ref:function(e){return x.push(e)},onKeyDown:function(e){!function(e,t,n){switch(n.keyCode){case u:!function(e,t){var n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()}(e,t);break;case i:!function(e,t){var n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()}(e,t)}}(x,e.target,e)},onFocus:function(){return O(t)},onClick:function(){O(t)}},n)}))),t?Object(a.cloneElement)(j.filter((function(e){return e.props.value===g}))[0],{className:"margin-vert--md"}):o.a.createElement("div",{className:"margin-vert--md"},j.map((function(e,t){return Object(a.cloneElement)(e,{key:t,hidden:e.props.value!==g})}))))}},118:function(e,t,n){"use strict";var a=n(3),o=n(0),r=n.n(o);t.a=function(e){var t=e.children,n=e.hidden,o=e.className;return r.a.createElement("div",Object(a.a)({role:"tabpanel"},{hidden:n,className:o}),t)}},119:function(e,t,n){"use strict";var a=n(4),o=n(110),r=n.n(o),s=n(115),l=function(e){function t(t){var n;return(n=e.call(this,t)||this).state={code:"",lineStart:0,lineEnd:0},n}Object(a.a)(t,e);var n=t.prototype;return n.componentDidMount=function(){var e=this;fetch("https://raw.githubusercontent.com/aml-org/"+this.props.codeUrl).then((function(e){return e.text()})).then((function(t){var n=t,a=e.props.lineStart,o=e.props.lineEnd;o-a>0&&(n=n.split("\n").slice(a,o).join("\n")),e.setState({code:n})})).catch((function(e){return console.error(e)}))},n.render=function(){return r.a.createElement(s.a,{className:this.props.language},this.state.code)},t}(o.Component);t.a=l},65:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return u})),n.d(t,"toc",(function(){return p})),n.d(t,"default",(function(){return m}));var a=n(3),o=n(7),r=(n(110),n(111)),s=n(117),l=n(118),c=n(119),i={id:"validation_code",title:"Validation",hide_title:!0},u={unversionedId:"not-published/aml-code-samples/validation_code",id:"not-published/aml-code-samples/validation_code",isDocsHomePage:!1,title:"Validation",description:"Validation",source:"@site/../docs/not-published/aml-code-samples/validation.mdx",slug:"/not-published/aml-code-samples/validation_code",permalink:"/docs/not-published/aml-code-samples/validation_code",version:"current",lastUpdatedBy:"arielmirra",lastUpdatedAt:1612988719},p=[{value:"Example",id:"example",children:[]}],d={toc:p};function m(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},d,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h1",{id:"validation"},"Validation"),Object(r.b)("p",null,"AMF can be used to validate parsed AML models. The validator is accessible through the ",Object(r.b)("inlineCode",{parentName:"p"},"validate")," method in the main AMF model."),Object(r.b)("p",null,"The name of any loaded AML dialect can be used as the validation profile name used to validate the model."),Object(r.b)("h2",{id:"example"},"Example"),Object(r.b)(s.a,{groupId:"languages",defaultValue:"java",values:[{label:"Java",value:"java"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},Object(r.b)(l.a,{value:"java",mdxType:"TabItem"},Object(r.b)(c.a,{language:"java",codeUrl:"examples/master/src/main/java/aml_org/examples/Validating.java",mdxType:"CodeGetter"})),Object(r.b)(l.a,{value:"js",mdxType:"TabItem"},Object(r.b)(c.a,{language:"js",codeUrl:"examples/master/src/main/js/Validating.js",mdxType:"CodeGetter"}))))}m.isMDXComponent=!0}}]);