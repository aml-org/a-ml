(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{104:function(t,a,e){"use strict";e.r(a),e.d(a,"frontMatter",(function(){return s})),e.d(a,"metadata",(function(){return l})),e.d(a,"toc",(function(){return r})),e.d(a,"default",(function(){return c}));var n=e(3),i=e(7),o=(e(110),e(111)),s={id:"queries",title:"All about Queries",hide_title:!0},l={unversionedId:"not-published/aml-tutorials/queries",id:"not-published/aml-tutorials/queries",isDocsHomePage:!1,title:"All about Queries",description:"Using the W3C Stack",source:"@site/../docs/not-published/aml-tutorials/querying.mdx",slug:"/not-published/aml-tutorials/queries",permalink:"/docs/not-published/aml-tutorials/queries",version:"current",lastUpdatedBy:"arielmirra",lastUpdatedAt:1612988719},r=[{value:"Before you begin",id:"before-you-begin",children:[]},{value:"Download the example",id:"download-the-example",children:[]},{value:"Build and install the AMF command-line tool",id:"build-and-install-the-amf-command-line-tool",children:[]},{value:"Install Apache Jena",id:"install-apache-jena",children:[]},{value:"Running a query over the graph of metadata",id:"running-a-query-over-the-graph-of-metadata",children:[]},{value:"Making the graph grow",id:"making-the-graph-grow",children:[]}],p={toc:r};function c(t){var a=t.components,e=Object(i.a)(t,["components"]);return Object(o.b)("wrapper",Object(n.a)({},p,e,{components:a,mdxType:"MDXLayout"}),Object(o.b)("h1",{id:"using-the-w3c-stack"},"Using the W3C Stack"),Object(o.b)("p",null,"This tutorial shows you how to use the W3C stack of technologies for Linked Data to work with metadata defined using AML."),Object(o.b)("h2",{id:"before-you-begin"},"Before you begin"),Object(o.b)("p",null,"Prerequisites:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"JVM: version 7 or higher"),Object(o.b)("li",{parentName:"ul"},"SBT to build the AMF command-line"),Object(o.b)("li",{parentName:"ul"},"Local installation of ",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://jena.apache.org/"}),"Apache Jena"))),Object(o.b)("h2",{id:"download-the-example"},"Download the example"),Object(o.b)("p",null,"You can download the example from the AML project ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/aml-org/examples"}),"examples repository")," in Github."),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"\ngit clone https://github.com/aml-org/examples.git\ncd examples\n\n")),Object(o.b)("h2",{id:"build-and-install-the-amf-command-line-tool"},"Build and install the AMF command-line tool"),Object(o.b)("p",null,"This tutorial assumes you have a working version of the AMF command-line as described in the ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/not-published/aml-tutorials/quickstart"}),"quickstart")," tutorial."),Object(o.b)("h2",{id:"install-apache-jena"},"Install Apache Jena"),Object(o.b)("p",null,Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://jena.apache.org/"}),"Apache Jena")," is a popular Java library to work with semantic and linked data. It can be used as a programming library, but also contains a number of command-line tools that we will use in this tutorial."),Object(o.b)("p",null,"Installing Jena is beyond the scope of this tutorial. For information about installation for your platform, see the Jena site. For example, in Mac OS systems, Jena can be installed using ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://brew.sh/"}),"Homebrew")),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"\nmusic [master] $ brew install jena\n\n")),Object(o.b)("h2",{id:"running-a-query-over-the-graph-of-metadata"},"Running a query over the graph of metadata"),Object(o.b)("p",null,"AML documents can be parsed into a graph of metadata using AMF."),Object(o.b)("p",null,"This graph is encoded as a JSON-LD document. In this tutorial, we will use Jena to execute a query over this graph of information."),Object(o.b)("p",null,"We will generate the resolved graph of information parsing one of the playlist documents in the music example using AMF:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),'\njava -jar amf.jar parse -ds file://aml/music/dialect/playlist.yaml -in "AML 1.0" -mime-in application/yaml -ctx true --resolve true aml/music/playlist1.yaml > playlist1.json\n\n')),Object(o.b)("p",null,"The Jena query command line, needs to get the input data as a set of assertions in the ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.w3.org/TR/turtle/"}),"Turtle")," format. We will use the Jena ",Object(o.b)("inlineCode",{parentName:"p"},"riot")," command line to transform our JSON-LD output file into Turtle and store it in the ",Object(o.b)("inlineCode",{parentName:"p"},"playlist.ttl")," file:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"\nexamples [master] $ riot --syntax=JSON-LD playlist1.json --output=TTL > playlist.ttl\n\n")),Object(o.b)("p",null,"Now, we can run a query over the graph after loading it into Jena. The query is going to be expressed in the standard ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.w3.org/TR/sparql11-query/"}),"SPARQL")," graph query language."),Object(o.b)("p",null,"We will list 10 songs ordered by song duration and also retrieve the name of the song:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),'\nexamples [master] $ sparql --data=playlist.ttl "\n\n PREFIX music: <http://mulesoft.com/vocabularies/music#>\n PREFIX schema: <http://schema.org/>\n select * {\n    ?song music:duration ?duration ;\n    schema:name ?name .\n  }\n  ORDER BY DESC(?duration)\n  LIMIT 10\n"\n---------------------------------------------------------------------------------------------------------------------------------------------------------------------------\n| song                                                       | duration | name                                                                                            |\n===========================================================================================================================================================================\n| <https://api.spotify.com/v1/tracks/1nqyxZH4AX0o2S9th6kRZL> | 1088     | "Tapiola, Op 112"                                                                               |\n| <https://api.spotify.com/v1/tracks/1fdylFrFz7xU6GFEKroIzk> | 705      | "Sederunt Principes"                                                                            |\n| <https://api.spotify.com/v1/tracks/3kaz90sTbwAzWM5nzRLXkJ> | 367      | "Zefiro torna e di soavi accenti, SV 251"                                                       |\n| <https://api.spotify.com/v1/tracks/3MpnuPOrFwNB1iCGr4JkVn> | 247      | "Duo belli occhi fur l\'armi, onde traffitta"                                                    |\n| <https://api.spotify.com/v1/tracks/1QKykbp9b0iNzXCJH6SNWj> | 157      | "Jazz Suite No 2.2 Lyriz Waltz"                                                                 |\n| <https://api.spotify.com/v1/tracks/1mEXZtRMEnjqdPTmZfNzU2> | 134      | "String Quintet in C Major G 324, Op 30, No 6\\n\\"La Musica notturna delle strade di Madrid\\"\\n" |\n---------------------------------------------------------------------------------------------------------------------------------------------------------------------------\n\n')),Object(o.b)("h2",{id:"making-the-graph-grow"},"Making the graph grow"),Object(o.b)("p",null,"The graph parsed from AML metadata documents can be enlarged by just adding assertions parsed from the graph."),Object(o.b)("p",null,"Let's add another playlist to our graph of metadata, parsing the ",Object(o.b)("inlineCode",{parentName:"p"},"aml/music/playlist2.yaml")," file:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),'\njava -jar amf.jar parse -ds file://aml/music/dialect/playlist.yaml -in "AML 1.0" -mime-in application/yaml -ctx true --resolve true aml/music/playlist2.yaml > playlist2.json\n\n')),Object(o.b)("p",null,"Now, we will use Jena to transform the JSON-LD document into additional assertions to our playlist.ttl graph:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"\nexamples [master] $ riot --syntax=JSON-LD playlist2.json --output=TTL >> playlist.ttl\n\n")),Object(o.b)("p",null,"If we run the same query, we will find additional songs:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),'\nexamples [master] $ sparql --data=playlist.ttl "\n\n  PREFIX music: <http://mulesoft.com/vocabularies/music#>\n  PREFIX schema: <http://schema.org/>\n  select * {\n     ?song music:duration ?duration ;\n     schema:name ?name .\n   }\n   ORDER BY DESC(?duration)\n   LIMIT 10\n "\n------------------------------------------------------------------------------------------------------------------------\n| song                                                       | duration | name                                         |\n========================================================================================================================\n| <https://api.spotify.com/v1/tracks/1nqyxZH4AX0o2S9th6kRZL> | 1088     | "Tapiola, Op 112"                            |\n| <https://api.spotify.com/v1/tracks/1fdylFrFz7xU6GFEKroIzk> | 705      | "Sederunt Principes"                         |\n| <https://api.spotify.com/v1/tracks/3kaz90sTbwAzWM5nzRLXkJ> | 367      | "Zefiro torna e di soavi accenti, SV 251"    |\n| <https://api.spotify.com/v1/tracks/7aZGReAQ235D3r9iiao5U5> | 348      | "Get Down"                                   |\n| <https://api.spotify.com/v1/tracks/17wXLFsvZVX14x9SntU58w> | 321      | "Think (About it)"                           |\n| <https://api.spotify.com/v1/tracks/7b8s4Z0abQQ4x4jpct4GjR> | 301      | "Cissy Strut"                                |\n| <https://api.spotify.com/v1/tracks/4r9FfsM0ScLb5GM9gsJwI7> | 258      | "California Soul"                            |\n| <https://api.spotify.com/v1/tracks/3MpnuPOrFwNB1iCGr4JkVn> | 247      | "Duo belli occhi fur l\'armi, onde traffitta" |\n| <https://api.spotify.com/v1/tracks/0d32aUh8S5sa4dYypUKWLh> | 158      | "Unwind Yourself"                            |\n| <https://api.spotify.com/v1/tracks/1QKykbp9b0iNzXCJH6SNWj> | 157      | "Jazz Suite No 2.2 Lyriz Waltz"              |\n------------------------------------------------------------------------------------------------------------------------\n\n')),Object(o.b)("p",null,"We can use use the relationship between playlists and songs in the graph to introduce that information into the query:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),'\nexamples [master] $ sparql --data=playlist.ttl "\n\n  PREFIX music: <http://mulesoft.com/vocabularies/music#>\n  PREFIX curation: <http://mulesoft.com/vocabularies/music_curation#>\n  PREFIX schema: <http://schema.org/>\n\n  select ?playlist ?name ?duration {\n     ?playlist curation:contents/curation:selectedTrack ?song .\n     ?song schema:name ?name ;\n           music:duration ?duration .\n   }\n  ORDER BY desc(?duration)\n"\n-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------\n| playlist                                                                         | name                                                                                            | duration |\n=================================================================================================================================================================================================\n| <https://api.spotify.com/v1/antoniogarrote/playlists/5Qzm0PDPxbNrLvIu0OVinc>     | "Tapiola, Op 112"                                                                               | 1088     |\n| <https://api.spotify.com/v1/antoniogarrote/playlists/5Qzm0PDPxbNrLvIu0OVinc>     | "Sederunt Principes"                                                                            | 705      |\n| <https://api.spotify.com/v1/antoniogarrote/playlists/5Qzm0PDPxbNrLvIu0OVinc>     | "Zefiro torna e di soavi accenti, SV 251"                                                       | 367      |\n| <https://api.spotify.com/v1/gattonerogattonero/playlists/5avfEocRttdTTESa8aTAGK> | "Get Down"                                                                                      | 348      |\n| <https://api.spotify.com/v1/gattonerogattonero/playlists/5avfEocRttdTTESa8aTAGK> | "Think (About it)"                                                                              | 321      |\n| <https://api.spotify.com/v1/gattonerogattonero/playlists/5avfEocRttdTTESa8aTAGK> | "Cissy Strut"                                                                                   | 301      |\n| <https://api.spotify.com/v1/gattonerogattonero/playlists/5avfEocRttdTTESa8aTAGK> | "California Soul"                                                                               | 258      |\n| <https://api.spotify.com/v1/antoniogarrote/playlists/5Qzm0PDPxbNrLvIu0OVinc>     | "Duo belli occhi fur l\'armi, onde traffitta"                                                    | 247      |\n| <https://api.spotify.com/v1/gattonerogattonero/playlists/5avfEocRttdTTESa8aTAGK> | "Unwind Yourself"                                                                               | 158      |\n| <https://api.spotify.com/v1/antoniogarrote/playlists/5Qzm0PDPxbNrLvIu0OVinc>     | "Jazz Suite No 2.2 Lyriz Waltz"                                                                 | 157      |\n| <https://api.spotify.com/v1/antoniogarrote/playlists/5Qzm0PDPxbNrLvIu0OVinc>     | "String Quintet in C Major G 324, Op 30, No 6\\n\\"La Musica notturna delle strade di Madrid\\"\\n" | 134      |\n-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------\n\n')))}c.isMDXComponent=!0}}]);