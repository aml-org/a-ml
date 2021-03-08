(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{90:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return r})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return d}));var o=n(3),a=n(7),i=(n(110),n(111)),s={id:"amf_conversion",title:"AMF Conversion"},r={unversionedId:"related/amf_conversion",id:"related/amf_conversion",isDocsHomePage:!1,title:"AMF Conversion",description:"The functionality expressed in this documentation is currently a work in progress.",source:"@site/../docs/related/amf-conversion.mdx",slug:"/related/amf_conversion",permalink:"/docs/related/amf_conversion",version:"current",lastUpdatedBy:"arielmirra",lastUpdatedAt:1612286140,sidebar:"docs",previous:{title:"Custom resource loaders",permalink:"/docs/custom/resource_loaders"},next:{title:"Async + RAML Data Types in AMF",permalink:"/docs/related/async_raml_datatypes"}},c=[{value:"Conversion Goals",id:"conversion-goals",children:[{value:"Concepts present in a spec but nonexistent in another aren&#39;t supported",id:"concepts-present-in-a-spec-but-nonexistent-in-another-arent-supported",children:[]},{value:"Not all specs are supported",id:"not-all-specs-are-supported",children:[]},{value:"Information may be lost",id:"information-may-be-lost",children:[]},{value:"Default conversion is not customizable",id:"default-conversion-is-not-customizable",children:[]},{value:"Round-trip conversions",id:"round-trip-conversions",children:[]},{value:"Why don&#39;t we use annotations to render incompatible content?",id:"why-dont-we-use-annotations-to-render-incompatible-content",children:[]},{value:"Why have some items in the spec lost their relative order?",id:"why-have-some-items-in-the-spec-lost-their-relative-order",children:[]},{value:"Can I parse and render my API from a spec to the same one?",id:"can-i-parse-and-render-my-api-from-a-spec-to-the-same-one",children:[]},{value:"Why do I have to use conversion resolution? Can&#39;t Renderers know how to render correctly?",id:"why-do-i-have-to-use-conversion-resolution-cant-renderers-know-how-to-render-correctly",children:[]}]}],l={toc:c};function d(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(o.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(i.b)("div",Object(o.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(o.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(o.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"}),Object(i.b)("path",Object(o.a)({parentName:"svg"},{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})))),"caution")),Object(i.b)("div",Object(o.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"The functionality expressed in this documentation is currently a work in progress.\nIf any bugs are found that do not satisfy these functionalities,\nplease file an issue in the ",Object(i.b)("a",Object(o.a)({parentName:"p"},{href:"https://github.com/aml-org/amf/issues"}),"amf repository"),"."))),Object(i.b)("h1",{id:"what-is-webapis-conversion"},"What is WebAPIs conversion?"),Object(i.b)("p",null,"Conversion stands for the capability of parsing a ",Object(i.b)("a",Object(o.a)({parentName:"p"},{href:"https://github.com/aml-org/amf/blob/develop/documentation/model.md#webapi"}),Object(i.b)("strong",{parentName:"a"},"WebAPI"))," from one specification vendor into an API graph and then rendering said graph as a different vendor's specification.\nIt's a ",Object(i.b)("em",{parentName:"p"},"cross parsing-rendering process")," from a source spec to a different target spec."),Object(i.b)("p",null,"Different specifications can have different required fields, and the same information conceptually may not be described in the same way.\nThis is why the AMF graph needs to go through a transformation process called ",Object(i.b)("em",{parentName:"p"},"\u201cCompatibility resolution\u201d"),"."),Object(i.b)("p",null,Object(i.b)("a",Object(o.a)({parentName:"p"},{href:"/docs/AMF/using-amf/amf_resolution#pipelines"}),Object(i.b)("strong",{parentName:"a"},"Compatibility resolution"))," is a specific resolution pipeline that is used to adapt an API graph parsed from one spec (source),\nto fulfill the requirements of another spec in which it will be rendered (target).\nAn example of how to use Compatibility Resolution can be seen in ",Object(i.b)("a",Object(o.a)({parentName:"p"},{href:"#conversion-examples"}),"Example 1"),"."),Object(i.b)("p",null,"How does this impact the API model? For example, fields that are not required in the origin spec but required in the target spec,\nwill be added with default values if they are not present in the origin spec."),Object(i.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(i.b)("div",Object(o.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(o.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(o.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(i.b)("path",Object(o.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"The Objective")),Object(i.b)("div",Object(o.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"The objective of conversion is to ",Object(i.b)("strong",{parentName:"p"},"output a valid AMF model for the spec in which it will be rendered"),".\nIt aims to ",Object(i.b)("strong",{parentName:"p"},"keep information loss to a minimum through a best-effort process")," with some limitations."))),Object(i.b)("h2",{id:"conversion-goals"},"Conversion Goals"),Object(i.b)("p",null,"Conversion resolution has several goals:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Make transitioning to/from OAS to RAML easier for the end user"),Object(i.b)("li",{parentName:"ul"},"Give the user an approximate view of what their API in another spec would look like"),Object(i.b)("li",{parentName:"ul"},"Let tools use specs that they don't directly support"),Object(i.b)("li",{parentName:"ul"},"Take advantage of spec-specific tooling",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"for example, converting to OAS to use ",Object(i.b)("a",Object(o.a)({parentName:"li"},{href:"https://swagger.io/tools/swagger-ui"}),"swagger-ui")," in a microservice or using a trusted client-spec generator that only works with RAML")))),Object(i.b)("h1",{id:"conversion-limitations"},"Conversion limitations"),Object(i.b)("p",null,"The AMF team, having listened to other team's needs, is the one that dictates how the model is adapted to fit other specs:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"If there is 1:1 information type mapping between specs it will be converted"),Object(i.b)("li",{parentName:"ul"},"If there are missing mandatory fields, a default value will be added\nThe default's value is opinionated, meaning that there may be more than one possible value, and we choose which one we use"),Object(i.b)("li",{parentName:"ul"},"Anything else is omitted")),Object(i.b)("h3",{id:"concepts-present-in-a-spec-but-nonexistent-in-another-arent-supported"},"Concepts present in a spec but nonexistent in another aren't supported"),Object(i.b)("p",null,"Sometimes a spec may introduce concepts that don't exist in other specs. There are many cases coming from RAML to OAS, some are:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Datatype Fragments"),Object(i.b)("li",{parentName:"ul"},"Libraries"),Object(i.b)("li",{parentName:"ul"},"Resource Types and Traits"),Object(i.b)("li",{parentName:"ul"},"Overlays and Extensions")),Object(i.b)("p",null,"These concepts cannot be converted to OAS as they do not exist in that spec.\nThese constructs can be migrated to OAS if and only if they are referenced from a root Api document."),Object(i.b)("h3",{id:"not-all-specs-are-supported"},"Not all specs are supported"),Object(i.b)("p",null,"As a consequence of the previous limitation, not all specs can be converted between each other. Currently, Async API is not supported for conversion.\nIts event-led concepts don't have a direct correspondence to REST concepts described in RAML or OAS.\nFor example, how would an Async APIs ",Object(i.b)("inlineCode",{parentName:"p"},"subscribe")," or ",Object(i.b)("inlineCode",{parentName:"p"},"binding")," be in RAML? The amount of similar concepts is simply not enough to create similar graphs."),Object(i.b)("p",null,"Supported conversions are:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"RAML 1.0 to OAS 2.0 and vice-versa"),Object(i.b)("li",{parentName:"ul"},"RAML 1.0 to OAS 3.0 and vice-versa")),Object(i.b)("h3",{id:"information-may-be-lost"},"Information may be lost"),Object(i.b)("p",null,"Original information that is incompatible with the target spec may be lost.\nThis is also a consequence of having concepts present in source spec that don't exist in the target spec.\nFor example OAS 3 links have no way of being migrated into RAML and will not be rendered in the converted RAML spec."),Object(i.b)("p",null,"In the next example, not all the RAML  ",Object(i.b)("inlineCode",{parentName:"p"},"documentation")," nodes can be migrated to OAS 3.0 ",Object(i.b)("inlineCode",{parentName:"p"},"externalDocs")," nodes.\nIn fact, only the first ",Object(i.b)("inlineCode",{parentName:"p"},"documentation")," node is kept while the others are lost.\nAs the RAML 1.0 ",Object(i.b)("inlineCode",{parentName:"p"},"documentation")," does not define an url like OAS 3.0's does, an url node is defined with an \u201cempty\u201d url."),Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{className:"language-yaml",metastring:'title="RAML to OAS 3.0 documentation conversion example - RAML code"',title:'"RAML',to:!0,OAS:!0,"3.0":!0,documentation:!0,conversion:!0,example:!0,"-":!0,RAML:!0,'code"':!0}),"documentation:\n    - title: Test Console and Mocking Service\n    content: |\n        Welcome to the \\_Test API\\_ Documentation. The \\_Test API\\_\n        allows you to test console and mocking service features\n        [integration libraries](https://mulesoft.com)\n    - title: Legal\n    content: !include docs/api.md\n")),Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{className:"language-yaml",metastring:'title="RAML to OAS 3.0 documentation conversion example - OAS code"',title:'"RAML',to:!0,OAS:!0,"3.0":!0,documentation:!0,conversion:!0,example:!0,"-":!0,'code"':!0}),"externalDocs:\n    url: http://\n    description: |\n        Welcome to the \\_Test API\\_ Documentation. The \\_Test API\\_\n        allows you to test console and mocking service features\n        [integration libraries](https://mulesoft.com)\n")),Object(i.b)("h3",{id:"default-conversion-is-not-customizable"},"Default conversion is not customizable"),Object(i.b)("p",null,"Each spec conversion is implemented as a different ",Object(i.b)("a",Object(o.a)({parentName:"p"},{href:"/docs/AMF/using-amf/amf_resolution"}),Object(i.b)("em",{parentName:"a"},"Resolution Pipeline")),", and provided pipelines are not modifiable.\nThus, the provided default conversion functionality is not customizable.\nHowever, a different conversion resolution can be implemented by creating a new ",Object(i.b)("em",{parentName:"p"},"ResolutionPipeline")," with the required conversion stages."),Object(i.b)("p",null,"We know and understand that the same API can be modeled and emitted in different ways following different practices, but it's not possible to cover them all."),Object(i.b)("h3",{id:"round-trip-conversions"},"Round-trip conversions"),Object(i.b)("p",null,"When AMF adapts a model graph to be able to render it in another spec, it knows from which spec the model was parsed (spec A) and to which spec the model will be rendered (spec B).\nAfter the model is rendered that knowledge is lost as that file is just another API from spec B.\nThis context loss makes it impossible to convert back again from spec B to spec A and expect exactly the same content."),Object(i.b)("p",null,"Previously, AMF attempted to reduce this information lost in conversion by rendering constructs that could only be parsed by them.\nThis was often done with special API constructs given by the specs and recognized by AMF:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(o.a)({parentName:"li"},{href:"https://github.com/raml-org/raml-spec/blob/master/versions/raml-10/raml-10.md#annotations"}),Object(i.b)("em",{parentName:"a"},"annotations"))," in RAML, written as ",Object(i.b)("inlineCode",{parentName:"li"},"amf-.*")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(o.a)({parentName:"li"},{href:"https://github.com/OAI/OpenAPI-Specification/blob/master/versions/3.0.0.md#specification-extensions"}),Object(i.b)("em",{parentName:"a"},"specification extensions"))," in OpenApi, written as ",Object(i.b)("inlineCode",{parentName:"li"},"x-amf-.*"))),Object(i.b)("p",null,"These attempts to keep as much information possible have two main drawbacks:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"AMF can't know whether some content in the rendered spec, like annotations, was rendered for compatibility purposes, or it is something that a spec author wanted to have in the spec"),Object(i.b)("li",{parentName:"ul"},"All recognizable attributes that AMF can write in the spec to identify it as coming from a compatibility context can be emulated by a spec designer with a modeling intention and are therefore invalid as conversion identifiers")),Object(i.b)("h1",{id:"common-questions"},"Common Questions"),Object(i.b)("h3",{id:"why-dont-we-use-annotations-to-render-incompatible-content"},"Why don't we use annotations to render incompatible content?"),Object(i.b)("p",null,"Incompatible content isn't rendered in an annotation because it goes against one of the goals of conversion: take advantage of tooling in a specific spec.\nAnnotation-rendered incompatible content will not be processed by tooling with the intent it was added to the spec, thus rendering that content useless."),Object(i.b)("h3",{id:"why-have-some-items-in-the-spec-lost-their-relative-order"},"Why have some items in the spec lost their relative order?"),Object(i.b)("p",null,"AMF doesn't guarantee that items keep their relative order. The framework does a best-effort of keeping order by reusing the spec's lexical information.\nAPI resolution may sometimes make that lexical information useless or meaningless due to several operations that it performs.\nThis is significant especially in conversion where fields may be added, removed or transformed."),Object(i.b)("p",null,"Why doesn't AMF guarantee relative order? AMF's underlying model is a directed cyclic graph.\nIn a graph, outgoing edges from a vertex aren't ordered relatively as the only thing that matters is where those edges go, not how they are ordered. The same applies to AMF's model."),Object(i.b)("h3",{id:"can-i-parse-and-render-my-api-from-a-spec-to-the-same-one"},"Can I parse and render my API from a spec to the same one?"),Object(i.b)("p",null,"You shouldn't resolve the model with a compatibility pipeline as these pipelines are just to move between different specifications."),Object(i.b)("p",null,"To render to the same specification you shouldn't apply a resolution unless you want the model to also be resolved (apply traits, resource types, apply inheritance and links, solve parameters, etc)."),Object(i.b)("p",null,"Although you can cycle (parse and render) your API using AMF you should reconsider why you are doing it and see if the framework has the capabilities of achieving what you seek in a different, more useful way."),Object(i.b)("h3",{id:"why-do-i-have-to-use-conversion-resolution-cant-renderers-know-how-to-render-correctly"},"Why do I have to use conversion resolution? Can't Renderers know how to render correctly?"),Object(i.b)("p",null,"Rendering has to render any model that is passed to the Renderers, it can't modify said model.\nThis is why conversion is done in a resolution stage (using a specific pipeline for compatibility), it is the only place where the model can be transformed before rendering."),Object(i.b)("h1",{id:"conversion-examples"},"Conversion Examples"),Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{className:"language-java",metastring:'title="Example 1. Conversion from RAML 1.0 to OAS 2.0 (Java)"',title:'"Example',"1.":!0,Conversion:!0,from:!0,RAML:!0,"1.0":!0,to:!0,OAS:!0,"2.0":!0,'(Java)"':!0}),'AMF.init().get();\nBaseUnit ramlApi = new RamlParser().parseFileAsync("<your-converted-api-file-path>").get();\nResolver resolver = new Oas20Resolver();\nBaseUnit convertedOasApi = resolver.resolve(ramlApi, ResolutionPipeline.COMPATIBILITY_PIPELINE());\nRenderer renderer = new Oas20Renderer();\nrenderer.generateFile(convertedOasApi, "<your-converted-api-file-path>").get();\n')),Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{className:"language-java",metastring:'title="Example 2. Custom ResolutionPipeline creation (Java)"',title:'"Example',"2.":!0,Custom:!0,ResolutionPipeline:!0,creation:!0,'(Java)"':!0}),"class MyOas20ConversionPipeline extends ResolutionPipeline {\n  public MyOas20ConversionPipeline(ErrorHandler eh) {\n    super(eh);\n  }\n\n  @Override\n  public ProfileName profileName() {\n    return Oas20Profile$.MODULE$;\n  }\n\n\n  @Override\n  public Seq<ResolutionStage> steps() {\n    List<ResolutionStage> stages = new ArrayList<>();\n    stages.add(new MyCustomStage(this.eh()));\n    return JavaConverters.asScalaBuffer(stages);\n  }\n}\n\npublic class MyCustomStage extends ResolutionStage {\n\n    public MyCustomStage(ErrorHandler errorHandler) {\n        super(errorHandler);\n    }\n\n    @Override\n    public <T extends BaseUnit> T resolve(T model) {\n        return model;\n    }\n}\n\n")))}d.isMDXComponent=!0}}]);