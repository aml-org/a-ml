(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{77:function(e,n,a){"use strict";a.r(n),a.d(n,"frontMatter",(function(){return o})),a.d(n,"metadata",(function(){return l})),a.d(n,"toc",(function(){return c})),a.d(n,"default",(function(){return s}));var t=a(3),r=a(7),i=(a(0),a(93)),o={id:"modularization",title:"Modularization",hide_title:!0},l={unversionedId:"modularization",id:"modularization",isDocsHomePage:!1,title:"Modularization",description:"Modularization",source:"@site/../docs/modularization.mdx",slug:"/modularization",permalink:"/docs/modularization",version:"current",lastUpdatedBy:"arielmirra",lastUpdatedAt:1609164773,sidebar:"docs",previous:{title:"Quickstart",permalink:"/docs/quickstart"},next:{title:"Custom validations",permalink:"/docs/custom_validations"}},c=[{value:"Before you begin",id:"before-you-begin",children:[]},{value:"Download the example",id:"download-the-example",children:[]},{value:"Build and install the AMF command-line tool",id:"build-and-install-the-amf-command-line-tool",children:[]},{value:"Initial stand-alone AML dialect",id:"initial-stand-alone-aml-dialect",children:[]},{value:"Defining reusable fragments",id:"defining-reusable-fragments",children:[]},{value:"Libraries of reusable entities",id:"libraries-of-reusable-entities",children:[]},{value:"Parsing and resolving with AMF",id:"parsing-and-resolving-with-amf",children:[]}],m={toc:c};function s(e){var n=e.components,a=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(t.a)({},m,a,{components:n,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"modularization"},"Modularization"),Object(i.b)("p",null,"This tutorial shows you how to define and edit reusable, modular metadata documents that can be linked together as a graph of metadata using AML."),Object(i.b)("h2",{id:"before-you-begin"},"Before you begin"),Object(i.b)("p",null,"Prerequisites:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"JVM: version 7 or higher"),Object(i.b)("li",{parentName:"ul"},"SBT to build the AMF command-line")),Object(i.b)("h2",{id:"download-the-example"},"Download the example"),Object(i.b)("p",null,"You can download the example from the AML project ",Object(i.b)("a",Object(t.a)({parentName:"p"},{href:"https://github.com/aml-org/examples"}),"examples repository")," in Github."),Object(i.b)("pre",null,Object(i.b)("code",Object(t.a)({parentName:"pre"},{className:"language-bash"}),"\ngit clone https://github.com/aml-org/examples.git\ncd examples/modular\n\n")),Object(i.b)("h2",{id:"build-and-install-the-amf-command-line-tool"},"Build and install the AMF command-line tool"),Object(i.b)("p",null,"This tutorial assumes you have a working version of the AMF command-line as described in the ",Object(i.b)("a",Object(t.a)({parentName:"p"},{href:"/docs/quickstart"}),"quickstart")," tutorial."),Object(i.b)("h2",{id:"initial-stand-alone-aml-dialect"},"Initial stand-alone AML dialect"),Object(i.b)("p",null,"In this tutorial, you will split a stand-alone, monolithic AML metadata document into a set of modular documents that can be edited, published and linked independently."),Object(i.b)("p",null,"We will start with the initial version of the dialect, found in ",Object(i.b)("inlineCode",{parentName:"p"},"aml/modular/dialect/database_configuration.yaml"),", a very simple AML Dialect describing configuration metadata file with information to connect to different databases."),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"database_configuration.yaml")),Object(i.b)("pre",null,Object(i.b)("code",Object(t.a)({parentName:"pre"},{className:"language-yaml"}),"\n#%Dialect 1.0\n\ndialect: DB Config\nversion: 1.0\n\nuses:\n  infra: ../vocabulary/infra.yaml\n  cfg: ../vocabulary/config.yaml\n\nexternal:\n  schema-org: http://schema.org/\n  dbconfig: http://mycompany.com/dialects/dbconfig#\n\n\nnodeMappings:\n\n  DatabaseConfigNode:\n    classTerm: cfg.ConfigurationItem\n    mapping:\n      server:\n        propertyTerm: cfg.configured\n        range: DatabaseServerNode\n      dbs:\n        propertyTerm: dbconfig.dbs\n        mapKey: cfg.environment\n        range: DatabaseNode\n\n  DatabaseNode:\n    classTerm: infra.Database\n    mapping:\n      environment:\n        propertyTerm: cfg.environment\n        range: string\n        enum:\n          - development\n          - production\n          - testing\n          - qa\n      name:\n        propertyTerm: schema-org.name\n        range: string\n        mandatory: true\n      username:\n        propertyTerm: cfg.username\n        range: string\n\n  DatabaseServerNode:\n    classTerm: infra.DatabaseServer\n    mapping:\n      host:\n        mandatory: true\n        propertyTerm: infra.endpoint\n        range: string\n      port:\n        mandatory: true\n        propertyTerm: infra.port\n        range: integer\n      driver:\n        mandatory: true\n        propertyTerm: infra.driver\n        range: string\n\ndocuments:\n  root:\n    encodes: DatabaseConfigNode\n\n")),Object(i.b)("p",null,"This AML dialect uses two vocabularies, one to describe infrastructure, and the other to describe configurations. Both are located in ",Object(i.b)("inlineCode",{parentName:"p"},"aml/modular/vocabulary/config.yaml")," and ",Object(i.b)("inlineCode",{parentName:"p"},"aml/modular/vocabulary/infra.yaml"),"."),Object(i.b)("p",null,"Since this AML dialect defines a single, monolithic type of document, the ",Object(i.b)("inlineCode",{parentName:"p"},"documents")," section of the dialect includes only a ",Object(i.b)("inlineCode",{parentName:"p"},"root")," entry encoding the root node of the document."),Object(i.b)("p",null,"Using this dialect definition, we can edit standalone configuration documents, like the configuration document located at ",Object(i.b)("inlineCode",{parentName:"p"},"aml/modular/db1.yaml"),":"),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"db1.yaml")),Object(i.b)("pre",null,Object(i.b)("code",Object(t.a)({parentName:"pre"},{className:"language-yaml"}),"\n#%DBConfig 1.0\n\nserver:\n  host: localhost\n  port: 5001\n  driver: mysql\n\ndbs:\n  dev:\n    name: accounts_dev\n    username: jsmith\n  test:\n    name: accounts_test\n    username: jsmith\n\n")),Object(i.b)("h2",{id:"defining-reusable-fragments"},"Defining reusable fragments"),Object(i.b)("p",null,"In many situations, entities defined in a document can be reused in multiple documents. AML allows you to define reusable entities in their own independent metadata documents, known as fragments, that can be linked from all these documents. The graph of information parsed from all these documents will point to the same node URI in the generated metadata graph."),Object(i.b)("p",null,"To declare a fragment, the ",Object(i.b)("inlineCode",{parentName:"p"},"documents")," section of the AML dialect must include a ",Object(i.b)("inlineCode",{parentName:"p"},"fragments")," entry with a mapping from the name of the fragment to the node encoded in the fragment."),Object(i.b)("p",null,"Version 1.1 of the DB Config dialect introduces a fragment to declare databases servers. It can be found in the ",Object(i.b)("inlineCode",{parentName:"p"},"aml/modular/dialect/database_configuration_2.yaml"),"."),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"database_configuration_2.yaml")),Object(i.b)("pre",null,Object(i.b)("code",Object(t.a)({parentName:"pre"},{className:"language-yaml"}),"\n#%Dialect 1.0\n\ndialect: DB Config\nversion: 1.1\n\n...\n\ndocuments:\n  root:\n    encodes: DatabaseConfigNode\n  fragments:\n    encodes:\n      DatabaseServer: DatabaseServerNode\n\n")),Object(i.b)("p",null,"In this case, we define a fragment named ",Object(i.b)("inlineCode",{parentName:"p"},"DatabaseServer")," encoding a ",Object(i.b)("inlineCode",{parentName:"p"},"DatabaseServerNode"),"."),Object(i.b)("p",null,"With this dialect definition, we can create fragments declaring metadata about database servers with the semantics of the ",Object(i.b)("inlineCode",{parentName:"p"},"Infrastructure")," vocabulary, for example in the ",Object(i.b)("inlineCode",{parentName:"p"},"aml/modular/server.yaml"),":"),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"server.yaml")),Object(i.b)("pre",null,Object(i.b)("code",Object(t.a)({parentName:"pre"},{className:"language-yaml"}),"\n#%DatabaseServer / DB Config 1.1\n\nhost: localhost\nport: 5001\ndriver: mysql\n\n")),Object(i.b)("p",null,"These fragments can be linked from the configuration document, using the ",Object(i.b)("inlineCode",{parentName:"p"},"!include")," linking directive:"),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"db2.yaml")),Object(i.b)("pre",null,Object(i.b)("code",Object(t.a)({parentName:"pre"},{className:"language-yaml"}),"\n#%DB Config 1.1\n\nserver: !include server.yaml\n\ndbs:\n  dev:\n    name: accounts_dev\n    username: jsmith\n  test:\n    name: accounts_test\n    username: jsmith\n\n")),Object(i.b)("h2",{id:"libraries-of-reusable-entities"},"Libraries of reusable entities"),Object(i.b)("p",null,"Another common use case is to define related collections of metadata entities that can be reused across different documents."),Object(i.b)("p",null,"AML supports these modular collections through the definition of metadata libraries.\nLibraries are defined in the ",Object(i.b)("inlineCode",{parentName:"p"},"documents")," section using the ",Object(i.b)("inlineCode",{parentName:"p"},"libraries")," property. This node keeps a map of declarations for the library, including name of the declaration and type of declared nodes."),Object(i.b)("p",null,"The version 1.2 of the ",Object(i.b)("inlineCode",{parentName:"p"},"DB Config")," dialect, located at ",Object(i.b)("inlineCode",{parentName:"p"},"aml/modular/dialect/database_configuration_3.yaml")," includes the declaration of libraries of servers:"),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"database_configuration_3.yaml")),Object(i.b)("pre",null,Object(i.b)("code",Object(t.a)({parentName:"pre"},{className:"language-yaml"}),"\n#%Dialect 1.0\n\ndialect: DB Config\nversion: 1.2\n\n...\n\ndocuments:\n  root:\n    encodes: DatabaseConfigNode\n  fragments:\n    encodes:\n      DatabaseServer: DatabaseServerNode\n  library:\n    declares:\n      servers: DatabaseServerNode\n\n")),Object(i.b)("p",null,"After these dialect definitions, metadata documents containing libraries of servers can be defined, like the one located at ",Object(i.b)("inlineCode",{parentName:"p"},"aml/modular/servers_library.yaml"),":"),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"servers_library.yaml")),Object(i.b)("pre",null,Object(i.b)("code",Object(t.a)({parentName:"pre"},{className:"language-yaml"}),"\n#%Library / DB Config 1.2\n\nservers:\n\n  local_mysql:\n    host: localhost\n    port: 5001\n    driver: mysql\n\n  local_postgres:\n    host: localhost\n    port: 5432\n    driver: postgres\n\n  production_mysql:\n    host: db.myapp.com\n    port: 9501\n    driver: mysql\n\n")),Object(i.b)("p",null,"These libraries can be referenced from configuration document using library reference aliases, as in ",Object(i.b)("inlineCode",{parentName:"p"},"aml/modular/db3.yaml"),":"),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"db3.yaml")),Object(i.b)("pre",null,Object(i.b)("code",Object(t.a)({parentName:"pre"},{className:"language-yaml"}),"\n#%DB Config 1.2\n\nuses:\n  servers: servers_library.yaml\n\nserver: servers.local_mysql\n\ndbs:\n  dev:\n    name: accounts_dev\n    username: jsmith\n  test:\n    name: accounts_test\n    username: jsmith\n\n")),Object(i.b)("p",null,"Instead of library reference aliases, ",Object(i.b)("inlineCode",{parentName:"p"},"$ref")," linking directives can also be used, as shown in this example JSON representation of the same metadata:"),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"db3.json")),Object(i.b)("pre",null,Object(i.b)("code",Object(t.a)({parentName:"pre"},{className:"language-json"}),'\n{\n    "$dialect": "DB Config 1.2",\n    "server": { "$ref": "servers_library.yaml#/servers/local_mysql"},\n    "dbs": {\n        "dev": {\n            "name": "accounts_dev",\n            "username": "jsmith"\n        },\n        "test": {\n            "name": "accounts_test",\n            "username": "jsmith"\n        }\n    }\n}\n\n')),Object(i.b)("h2",{id:"parsing-and-resolving-with-amf"},"Parsing and resolving with AMF"),Object(i.b)("p",null,"AMF can be used to parse modular metadata documents containing links.\nBy default, AMF will produce a JSON-LD document encoding a graph that explicitly links documents using the ",Object(i.b)("inlineCode",{parentName:"p"},"doc:link-target")," property. Linked documents will be eagerly followed and added to the ",Object(i.b)("inlineCode",{parentName:"p"},"doc:references")," list."),Object(i.b)("p",null,"Different types of documents in the graph will be marked with different semantics."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Fragments will be marked with the ",Object(i.b)("inlineCode",{parentName:"li"},"doc:Fragment")," class."),Object(i.b)("li",{parentName:"ul"},"Libraries will be marked with the ",Object(i.b)("inlineCode",{parentName:"li"},"doc:Module")," class.")),Object(i.b)("p",null,"For example, to parse version 1.1 of the database document using a fragment, AMF can be used:"),Object(i.b)("pre",null,Object(i.b)("code",Object(t.a)({parentName:"pre"},{className:"language-bash"}),'\nexamples [master] $ java -jar amf.jar parse -ds file://aml/modular/dialect/database_configuration_2.yaml -in "AML 1.0" -mime-in application/yaml -ctx true file://aml/modular/db2.yaml\n[\n  {\n    "@id": "#",\n    "@type": [\n      "meta:DialectInstance",\n      "doc:Document",\n      "doc:Fragment",\n      "doc:Module",\n      "doc:Unit"\n    ],\n    "meta:definedBy": [\n      {\n        "@id": "file://aml/modular/dialect/database_configuration_2.yaml#"\n      }\n    ],\n    "doc:encodes": [\n      {\n        "@id": "#/",\n        "@type": [\n          "http://mycompany.com/vocabularies/config#ConfigurationItem",\n          "file://aml/modular/dialect/database_configuration_2.yaml#/declarations/DatabaseConfigNode",\n          "meta:DialectDomainElement",\n          "doc:DomainElement"\n        ],\n        "http://mycompany.com/vocabularies/config#configured": [\n          {\n            "@id": "#/server",\n            "@type": [\n              "http://mycompany.com/vocabularies/infra#DatabaseServer",\n              "file://aml/modular/dialect/database_configuration_2.yaml#/declarations/DatabaseServerNode",\n              "meta:DialectDomainElement",\n              "doc:DomainElement"\n            ],\n            "doc:link-target": [\n              {\n                "@id": "file://aml/modular/server.yaml#/"\n              }\n            ],\n            "doc:link-label": [\n              {\n                "@value": "server.yaml"\n              }\n            ]\n          }\n        ],\n        "http://mycompany.com/dialects/dbconfig#dbs": [\n         ...\n        ]\n      }\n    ],\n    "doc:references": [\n      {\n        "@id": "file://aml/modular/server.yaml#",\n        "@type": [\n          "meta:DialectInstanceFragment",\n          "doc:Fragment",\n          "doc:Unit"\n        ],\n        "meta:definedBy": [\n          {\n            "@id": "file://aml/modular/dialect/database_configuration_2.yaml#"\n          }\n        ],\n        "doc:encodes": [\n          {\n            "@id": "file://aml/modular/server.yaml#/",\n            "@type": [\n              "http://mycompany.com/vocabularies/infra#DatabaseServer",\n              "file://aml/modular/dialect/database_configuration_2.yaml#/declarations/DatabaseServerNode",\n              "meta:DialectDomainElement",\n              "doc:DomainElement"\n            ],\n            "http://mycompany.com/vocabularies/infra#driver": [\n              {\n                "@value": "mysql"\n              }\n            ],\n            "http://mycompany.com/vocabularies/infra#endpoint": [\n              {\n                "@value": "localhost"\n              }\n            ],\n            "http://mycompany.com/vocabularies/infra#port": [\n              {\n                "@value": 5001\n              }\n            ]\n          }\n        ]\n      }\n    ],\n    "@context": {\n      "@base": "file://aml/modular/db2.yaml",\n      "doc": "http://a.ml/vocabularies/document#",\n      "meta": "http://a.ml/vocabularies/meta#",\n      "schema-org": "http://schema.org/"\n    }\n  }\n]\n\n')),Object(i.b)("p",null,"Sometimes, we want to work with the final graph of metadata in which all explicit links have been replaced by standard JSON-LD links. In the process, all the ",Object(i.b)("inlineCode",{parentName:"p"},"doc:references")," relationships disappear and a single unit is generated. This process is known as ",Object(i.b)("inlineCode",{parentName:"p"},"resolution")," in AMF."),Object(i.b)("p",null,"You can trigger the resolution process in AMF programmatically or by passing the ",Object(i.b)("inlineCode",{parentName:"p"},"--resolve true")," argument to the command line tool:"),Object(i.b)("pre",null,Object(i.b)("code",Object(t.a)({parentName:"pre"},{className:"language-bash"}),'\nexamples [master] $ java -jar amf.jar parse -ds file://aml/modular/dialect/database_configuration_2.yaml -in "AML 1.0" -mime-in application/yaml -ctx true --resolve true file://aml/modular/db2.yaml\n[\n  {\n    "@id": "#",\n    "@type": [\n      "meta:DialectInstance",\n      "doc:Document",\n      "doc:Fragment",\n      "doc:Module",\n      "doc:Unit"\n    ],\n    "meta:definedBy": [\n      {\n        "@id": "file://aml/modular/dialect/database_configuration_2.yaml#"\n      }\n    ],\n    "doc:encodes": [\n      {\n        "@id": "#/",\n        "@type": [\n          "http://mycompany.com/vocabularies/config#ConfigurationItem",\n          "file://aml/modular/dialect/database_configuration_2.yaml#/declarations/DatabaseConfigNode",\n          "meta:DialectDomainElement",\n          "doc:DomainElement"\n        ],\n        "http://mycompany.com/vocabularies/config#configured": [\n          {\n            "@id": "file://aml/modular/server.yaml#/",\n            "@type": [\n              "http://mycompany.com/vocabularies/infra#DatabaseServer",\n              "file://aml/modular/dialect/database_configuration_2.yaml#/declarations/DatabaseServerNode",\n              "meta:DialectDomainElement",\n              "doc:DomainElement"\n            ],\n            "http://mycompany.com/vocabularies/infra#driver": [\n              {\n                "@value": "mysql"\n              }\n            ],\n            "http://mycompany.com/vocabularies/infra#endpoint": [\n              {\n                "@value": "localhost"\n              }\n            ],\n            "http://mycompany.com/vocabularies/infra#port": [\n              {\n                "@value": 5001\n              }\n            ]\n          }\n        ],\n        "http://mycompany.com/dialects/dbconfig#dbs": [\n          {\n            "@id": "#/dbs/dev",\n            "@type": [\n              "http://mycompany.com/vocabularies/infra#Database",\n              "file://aml/modular/dialect/database_configuration_2.yaml#/declarations/DatabaseNode",\n              "meta:DialectDomainElement",\n              "doc:DomainElement"\n            ],\n            "schema-org:name": [\n              {\n                "@value": "accounts_dev"\n              }\n            ],\n            "http://mycompany.com/vocabularies/config#username": [\n              {\n                "@value": "jsmith"\n              }\n            ],\n            "http://mycompany.com/vocabularies/config#environment": [\n              {\n                "@value": "dev"\n              }\n            ]\n          },\n          {\n            "@id": "#/dbs/test",\n            "@type": [\n              "http://mycompany.com/vocabularies/infra#Database",\n              "file://aml/modular/dialect/database_configuration_2.yaml#/declarations/DatabaseNode",\n              "meta:DialectDomainElement",\n              "doc:DomainElement"\n            ],\n            "schema-org:name": [\n              {\n                "@value": "accounts_test"\n              }\n            ],\n            "http://mycompany.com/vocabularies/config#username": [\n              {\n                "@value": "jsmith"\n              }\n            ],\n            "http://mycompany.com/vocabularies/config#environment": [\n              {\n                "@value": "test"\n              }\n            ]\n          }\n        ]\n      }\n    ],\n    "@context": {\n      "@base": "file://aml/modular/db2.yaml",\n      "doc": "http://a.ml/vocabularies/document#",\n      "meta": "http://a.ml/vocabularies/meta#",\n      "schema-org": "http://schema.org/"\n    }\n  }\n]\n\n')))}s.isMDXComponent=!0},93:function(e,n,a){"use strict";a.d(n,"a",(function(){return d})),a.d(n,"b",(function(){return p}));var t=a(0),r=a.n(t);function i(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function o(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function l(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?o(Object(a),!0).forEach((function(n){i(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function c(e,n){if(null==e)return{};var a,t,r=function(e,n){if(null==e)return{};var a,t,r={},i=Object.keys(e);for(t=0;t<i.length;t++)a=i[t],n.indexOf(a)>=0||(r[a]=e[a]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)a=i[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var m=r.a.createContext({}),s=function(e){var n=r.a.useContext(m),a=n;return e&&(a="function"==typeof e?e(n):l(l({},n),e)),a},d=function(e){var n=s(e.components);return r.a.createElement(m.Provider,{value:n},e.children)},b={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},u=r.a.forwardRef((function(e,n){var a=e.components,t=e.mdxType,i=e.originalType,o=e.parentName,m=c(e,["components","mdxType","originalType","parentName"]),d=s(a),u=t,p=d["".concat(o,".").concat(u)]||d[u]||b[u]||i;return a?r.a.createElement(p,l(l({ref:n},m),{},{components:a})):r.a.createElement(p,l({ref:n},m))}));function p(e,n){var a=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var i=a.length,o=new Array(i);o[0]=u;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:t,o[1]=l;for(var m=2;m<i;m++)o[m]=a[m];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"}}]);