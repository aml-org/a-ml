(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{94:function(e,a,n){"use strict";n.r(a),n.d(a,"frontMatter",(function(){return i})),n.d(a,"metadata",(function(){return c})),n.d(a,"toc",(function(){return r})),n.d(a,"default",(function(){return m}));var t=n(3),o=n(7),l=(n(110),n(111)),i={id:"quickstart",title:"Quickstart",hide_title:!0},c={unversionedId:"not-published/aml-tutorials/quickstart",id:"not-published/aml-tutorials/quickstart",isDocsHomePage:!1,title:"Quickstart",description:"Quickstart",source:"@site/../docs/not-published/aml-tutorials/quickstart.mdx",slug:"/not-published/aml-tutorials/quickstart",permalink:"/docs/not-published/aml-tutorials/quickstart",version:"current",lastUpdatedBy:"arielmirra",lastUpdatedAt:1613661878},r=[{value:"Before you begin",id:"before-you-begin",children:[]},{value:"Download the example",id:"download-the-example",children:[]},{value:"Build and install the AMF command-line tool",id:"build-and-install-the-amf-command-line-tool",children:[]},{value:"Defining an AML dialect for a new type of metadata documents",id:"defining-an-aml-dialect-for-a-new-type-of-metadata-documents",children:[]},{value:"Parsing metadata documents",id:"parsing-metadata-documents",children:[]},{value:"Using vocabularies for custom semantics",id:"using-vocabularies-for-custom-semantics",children:[]},{value:"Validating metadata documents",id:"validating-metadata-documents",children:[]}],s={toc:r};function m(e){var a=e.components,n=Object(o.a)(e,["components"]);return Object(l.b)("wrapper",Object(t.a)({},s,n,{components:a,mdxType:"MDXLayout"}),Object(l.b)("h1",{id:"quickstart"},"Quickstart"),Object(l.b)("p",null,"This tutorial covers installing all the tools you'll need to design metadata documents with AML and shows you how to get up and running quickly."),Object(l.b)("h2",{id:"before-you-begin"},"Before you begin"),Object(l.b)("p",null,"Prerequisites:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"JVM: version 7 or higher"),Object(l.b)("li",{parentName:"ul"},"SBT to build the AMF command-line")),Object(l.b)("h2",{id:"download-the-example"},"Download the example"),Object(l.b)("p",null,"You can download the example from the AML project ",Object(l.b)("a",Object(t.a)({parentName:"p"},{href:"https://github.com/aml-org/examples"}),"examples repository")," in Github."),Object(l.b)("pre",null,Object(l.b)("code",Object(t.a)({parentName:"pre"},{className:"language-bash"}),"\ngit clone https://github.com/aml-org/examples.git\ncd examples\n\n")),Object(l.b)("h2",{id:"build-and-install-the-amf-command-line-tool"},"Build and install the AMF command-line tool"),Object(l.b)("p",null,"Download AMF from its github repository and build AMF command-line (you will need ",Object(l.b)("a",Object(t.a)({parentName:"p"},{href:"https://www.scala-sbt.org/"}),"Scala SBT"),"):"),Object(l.b)("pre",null,Object(l.b)("code",Object(t.a)({parentName:"pre"},{className:"language-bash"}),"\ngit clone https://github.com/aml-org/amf.git\ncd amf\nsbt buildCommandLine\n\n")),Object(l.b)("p",null,"This will leave a versioned fat jar (amf-X.Y.Z-SNAPSHOT.jar) in the top-level repository of the project.\nCopy this jar file to the top-level of the ",Object(l.b)("a",Object(t.a)({parentName:"p"},{href:"https://github.com/aml-org/examples"}),"examples repository"),":"),Object(l.b)("pre",null,Object(l.b)("code",Object(t.a)({parentName:"pre"},{className:"language-bash"}),"\ncp ./amf-X.Y.Z-SNAPSHOT.jar ../examples/amf.jar\n\n")),Object(l.b)("h2",{id:"defining-an-aml-dialect-for-a-new-type-of-metadata-documents"},"Defining an AML dialect for a new type of metadata documents"),Object(l.b)("p",null,"In this example we will define a new type of metadata document to exchange information about geographical locations."),Object(l.b)("p",null,"First, we will define a new type of AML dialect describing the structure of the document, located in the ",Object(l.b)("a",Object(t.a)({parentName:"p"},{href:"https://github.com/aml-org/examples"}),"examples repository")," in the file ",Object(l.b)("inlineCode",{parentName:"p"},"aml/quickstart/dialects/places.yaml"),":"),Object(l.b)("p",null,Object(l.b)("em",{parentName:"p"},"places.yaml")),Object(l.b)("pre",null,Object(l.b)("code",Object(t.a)({parentName:"pre"},{className:"language-yaml"}),"\n#%Dialect 1.0\n\ndialect: Places\nversion: 1.0\n\nexternal:\n  schema: http://schema.org/\n\nnodeMappings:\n\n  LocationNode:\n    classTerm: schema.Place\n    mapping:\n      name:\n        propertyTerm: schema.name\n        mandatory: true\n        range: string\n      image:\n        propertyTerm: schema.image\n        range: uri\n\ndocuments:\n  root:\n    encodes: LocationNode\n\n")),Object(l.b)("p",null,"The dialect is very simple. It just defines a document with a couple of nodes: one for the place, and the other for an image of the place. We are using the ",Object(l.b)("a",Object(t.a)({parentName:"p"},{href:"http://schema.org"}),"Schema.org")," vocabulary to provide the semantics of the metadata."),Object(l.b)("p",null,"You can check the validity of this AML dialect using AMF. From the top-level directory of the ",Object(l.b)("a",Object(t.a)({parentName:"p"},{href:"https://github.com/aml-org/examples"}),"examples repository"),":"),Object(l.b)("pre",null,Object(l.b)("code",Object(t.a)({parentName:"pre"},{className:"language-bash"}),'\nexamples [master] $ java -jar amf.jar validate -in "AML 1.0" -mime-in application/yaml file://aml/quickstart/dialects/places.yaml\n{\n  "@type": "http://www.w3.org/ns/shacl#ValidationReport",\n  "http://www.w3.org/ns/shacl#conforms": true\n}\n\n')),Object(l.b)("h2",{id:"parsing-metadata-documents"},"Parsing metadata documents"),Object(l.b)("p",null,"Having a valid AML dialect, we can start using it to parse metadata documents with information about different places."),Object(l.b)("p",null,"For example, we can try the ",Object(l.b)("inlineCode",{parentName:"p"},"golden_gate.yaml")," document:"),Object(l.b)("p",null,Object(l.b)("em",{parentName:"p"},"golden_gate.yaml")),Object(l.b)("pre",null,Object(l.b)("code",Object(t.a)({parentName:"pre"},{className:"language-yaml"}),"\n#%Places 1.0\n\nname: Golden Gate\nimage: https://en.wikipedia.org/wiki/Golden_Gate#/media/File:Golden_Gate_1.jpg\n\n")),Object(l.b)("p",null,"We can use AMF to parse and validate the example, passing as an argument the location of the dialect and dialect instance to be parsed:"),Object(l.b)("pre",null,Object(l.b)("code",Object(t.a)({parentName:"pre"},{className:"language-bash"}),'\nexamples [master] $ java -jar amf.jar parse -ds file://aml/quickstart/dialects/places.yaml -in "AML 1.0" -mime-in application/yaml -ctx true file://aml/quickstart/golden_gate.yaml\n\n')),Object(l.b)("p",null,"The following JSON-LD document will be returned in the console:"),Object(l.b)("pre",null,Object(l.b)("code",Object(t.a)({parentName:"pre"},{className:"language-json"}),'\n[\n  {\n    "@id": "#",\n    "@type": [\n      "meta:DialectInstance",\n      "doc:Document",\n      "doc:Fragment",\n      "doc:Module",\n      "doc:Unit"\n    ],\n    "meta:definedBy": [\n      {\n        "@id": "file://aml/quickstart/dialects/places.yaml#"\n      }\n    ],\n    "doc:encodes": [\n      {\n        "@id": "#/",\n        "@type": [\n          "schema-org:Place",\n          "file://aml/quickstart/dialects/places.yaml#/declarations/LocationNode",\n          "meta:DialectDomainElement",\n          "doc:DomainElement"\n        ],\n        "schema-org:image": [\n          {\n            "@id": "https://en.wikipedia.org/wiki/Golden_Gate#/media/File:Golden_Gate_1.jpg"\n          }\n        ],\n        "schema-org:name": [\n          {\n            "@value": "Golden Gate"\n          }\n        ]\n      }\n    ],\n    "@context": {\n      "@base": "file://aml/quickstart/golden_gate.yaml",\n      "doc": "http://a.ml/vocabularies/document#",\n      "meta": "http://a.ml/vocabularies/meta#",\n      "schema-org": "http://schema.org/"\n    }\n  }\n]\n\n')),Object(l.b)("p",null,Object(l.b)("a",Object(t.a)({parentName:"p"},{href:"https://json-ld.org/"}),"JSON-LD")," is a ",Object(l.b)("a",Object(t.a)({parentName:"p"},{href:"https://www.w3.org/TR/json-ld/"}),"W3C standard")," to store graphs of information with support for hyperlinks. JSON-LD is the native format for AMF-parsed graph models."),Object(l.b)("h2",{id:"using-vocabularies-for-custom-semantics"},"Using vocabularies for custom semantics"),Object(l.b)("p",null,"AML allows users to define the semantics for metadata documents in AML vocabulary files."),Object(l.b)("p",null,"The file ",Object(l.b)("inlineCode",{parentName:"p"},"aml/quickstart/geolocation.yaml")," contains a vocabulary defining a few terms for a custom geolocation vocabulary:"),Object(l.b)("p",null,Object(l.b)("em",{parentName:"p"},"geolocation.yaml")),Object(l.b)("pre",null,Object(l.b)("code",Object(t.a)({parentName:"pre"},{className:"language-yaml"}),"\n#%Vocabulary 1.0\n\nvocabulary: Geolocation\n\nbase: http://myorg.com/vocabs/geo#\n\nclassTerms:\n\n  Point:\n    description: Single coordinate pair\n\n  Line:\n    description: Pair of points\n\n  Polygon:\n    description: contains at least 4 coordinate points\n\npropertyTerms:\n\n  position:\n    description: Geolocation of an element\n    range: Point\n\n  latitude:\n    description: Geographical latitude\n\n  longitude:\n    description: Geographical longitude\n\n")),Object(l.b)("p",null,"We could modify our dialect to generate a new version that uses the AML vocabulary for geolocation we have just reviewed:"),Object(l.b)("p",null,Object(l.b)("em",{parentName:"p"},"places_2.yaml")),Object(l.b)("pre",null,Object(l.b)("code",Object(t.a)({parentName:"pre"},{className:"language-yaml"}),"\n#%Dialect 1.0\n\ndialect: Places\nversion: 1.1\n\nuses:\n  geo: ../vocabularies/geolocation.yaml\n\nexternal:\n  schema: http://schema.org/\n\nnodeMappings:\n\n  LocationNode:\n    classTerm: schema.Place\n    mapping:\n      name:\n        propertyTerm: schema.name\n        mandatory: true\n        range: string\n      image:\n        propertyTerm: schema.image\n        range: uri\n      location:\n        mandatory: true\n        propertyTerm: geo.position\n        range: CoordinatesNode\n\n  CoordinatesNode:\n    classTerm: geo.Point\n    mapping:\n      lat:\n        propertyTerm: geo.latitude\n        mandatory: true\n        range: double\n      long:\n        propertyTerm: geo.longitude\n        mandatory: true\n        range: double\n\ndocuments:\n  root:\n    encodes: LocationNode\n\n")),Object(l.b)("p",null,"Now, we can parse documents that include geographical coordinates like:"),Object(l.b)("p",null,Object(l.b)("em",{parentName:"p"},"golden_gate_2.yaml")),Object(l.b)("pre",null,Object(l.b)("code",Object(t.a)({parentName:"pre"},{className:"language-yaml"}),"\n#%Places 1.1\n\nname: Golden Gate\nimage: https://en.wikipedia.org/wiki/Golden_Gate#/media/File:Golden_Gate_1.jpg\nlocation:\n  lat: 37.81\n  long: 122.5\n\n")),Object(l.b)("p",null,"The geographical information will appear in the graph using the semantic terms defined in our geolocation vocabulary:"),Object(l.b)("pre",null,Object(l.b)("code",Object(t.a)({parentName:"pre"},{className:"language-bash"}),'\nexamples [master] $ java -jar amf.jar parse -ds file://aml/quickstart/dialects/places_2.yaml -in "AML 1.0" -mime-in application/yaml -ctx true file://aml/quickstart/golden_gate_2.yaml\n[\n  {\n    "@id": "#",\n    "@type": [\n      "meta:DialectInstance",\n      "doc:Document",\n      "doc:Fragment",\n      "doc:Module",\n      "doc:Unit"\n    ],\n    "meta:definedBy": [\n      {\n        "@id": "file://aml/quickstart/dialects/places_2.yaml#"\n      }\n    ],\n    "doc:encodes": [\n      {\n        "@id": "#/",\n        "@type": [\n          "schema-org:Place",\n          "file://aml/quickstart/dialects/places_2.yaml#/declarations/LocationNode",\n          "meta:DialectDomainElement",\n          "doc:DomainElement"\n        ],\n        "schema-org:image": [\n          {\n            "@id": "https://en.wikipedia.org/wiki/Golden_Gate#/media/File:Golden_Gate_1.jpg"\n          }\n        ],\n        "schema-org:name": [\n          {\n            "@value": "Golden Gate"\n          }\n        ],\n        "http://myorg.com/vocabs/geo#position": [\n          {\n            "@id": "#/location",\n            "@type": [\n              "http://myorg.com/vocabs/geo#Point",\n              "file://aml/quickstart/dialects/places_2.yaml#/declarations/CoordinatesNode",\n              "meta:DialectDomainElement",\n              "doc:DomainElement"\n            ],\n            "http://myorg.com/vocabs/geo#longitude": [\n              {\n                "@value": 122.5\n              }\n            ],\n            "http://myorg.com/vocabs/geo#latitude": [\n              {\n                "@value": 37.81\n              }\n            ]\n          }\n        ]\n      }\n    ],\n    "@context": {\n      "@base": "file://aml/quickstart/golden_gate_2.yaml",\n      "doc": "http://a.ml/vocabularies/document#",\n      "meta": "http://a.ml/vocabularies/meta#",\n      "schema-org": "http://schema.org/"\n    }\n  }\n]\n\n')),Object(l.b)("h2",{id:"validating-metadata-documents"},"Validating metadata documents"),Object(l.b)("p",null,"If we try to parse an invalid document, the parser will fail and return an error message with a list of errors and syntactic information about the location of the error.\nAs an example, you can try to parse the ",Object(l.b)("inlineCode",{parentName:"p"},"aml/quickstart/piccadilly_circus_error.yaml")," document in the examples. In this document, geographical coordinates are provided as strings instead of double values:"),Object(l.b)("p",null,Object(l.b)("em",{parentName:"p"},"piccadilly_circus_error.yaml")),Object(l.b)("pre",null,Object(l.b)("code",Object(t.a)({parentName:"pre"},{className:"language-yaml"}),'\n#%Places 1.1\n\nname: Piccadilly Circus\nimage: https://commons.wikimedia.org/wiki/File:Open_Happiness_Piccadilly_Circus_Blue-Pink_Hour_120917-1126-jikatu.jpg#/media/File:Open_Happiness_Piccadilly_Circus_Blue-Pink_Hour_120917-1126-jikatu.jpg\nlocation:\n  lat: "51.30 N"\n  long: "0.8 W"\n\n')),Object(l.b)("p",null,"Parsing the document throws a textual error in the console:"),Object(l.b)("pre",null,Object(l.b)("code",Object(t.a)({parentName:"pre"},{className:"language-bash"}),"\nexamples [master] $ java -jar amf.jar parse -ds file://aml/quickstart/dialects/places_2.yaml -in \"AML 1.0\" -mime-in application/yaml -ctx true file://aml/quickstart/piccadilly_circus_error.yaml\nModel: file://aml/quickstart/piccadilly_circus_error.yaml#\nProfile: AMF\nConforms? false\nNumber of results: 2\n\nLevel: Violation\n\n- Source: http://a.ml/vocabularies/amf/parser#inconsistent-property-range-value\n  Message: Cannot find expected range for property http://myorg.com/vocabs/geo#latitude (lat). Found 'http://www.w3.org/2001/XMLSchema#string', expected 'http://www.w3.org/2001/XMLSchema#double'\n  Level: Violation\n  Target: file://aml/quickstart/piccadilly_circus_error.yaml#/location\n  Property: http://myorg.com/vocabs/geo#latitude\n  Position: Some(LexicalInformation([(6,7)-(6,16)]))\n\n- Source: http://a.ml/vocabularies/amf/parser#inconsistent-property-range-value\n  Message: Cannot find expected range for property http://myorg.com/vocabs/geo#longitude (long). Found 'http://www.w3.org/2001/XMLSchema#string', expected 'http://www.w3.org/2001/XMLSchema#double'\n  Level: Violation\n  Target: file://aml/quickstart/piccadilly_circus_error.yaml#/location\n  Property: http://myorg.com/vocabs/geo#longitude\n  Position: Some(LexicalInformation([(7,8)-(7,15)]))\n\n")),Object(l.b)("p",null,"To get the error report as a machine-friendly graph encoded using JSON-LD, the ",Object(l.b)("inlineCode",{parentName:"p"},"validate")," AMF command must be used."))}m.isMDXComponent=!0}}]);