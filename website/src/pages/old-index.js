import React from 'react';
import classnames from 'classnames';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import CodeBlock from '@theme/CodeBlock'
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const features = [
    {
        title: <>Designed for Connectivity</>,
        imageUrl: 'img/options.svg',
        description: (
            <>
                Align the semantics of different formats and link documents in a <strong>single unified metadata
                graph</strong>.
            </>
        ),
    },
    {
        title: <>Open Source</>,
        imageUrl: 'img/collaboration.svg',
        description: (
            <>
                AML and AMF are completely open source.
                We love the community and will always <a href="https://github.com/aml-org/" target="__blank"> welcome
                contributions</a>!
            </>
        ),
    },
    {
        title: <>Standards compliant</>,
        imageUrl: 'img/checklist.svg',
        description: (
            <>
                AML is compliant with <a href="https://www.w3.org/standards/" target="__blank">W3C standards</a> for
                semantics, linked data and the related ecosystem of tools.
            </>
        ),
    },
];

function Feature({imageUrl, title, description}) {
    const imgUrl = useBaseUrl(imageUrl);
    return (
        <div className={classnames('col col--4', styles.feature)}>
            <div className="text--center">
                <img className={styles.featureImage} src={imgUrl} alt={title}/>
            </div>
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    );
}

function Home() {
    const context = useDocusaurusContext();
    const {siteConfig = {}} = context;
    return (
        <Layout
            title="Docs"
            description="AML & AMF documentation">
            <header className={classnames('hero hero--primary', styles.heroBanner)}>
                <div className="container">
                    <img src="img/logos/amlLogo.svg"/>
                    <h1 className="hero__title">{siteConfig.title}</h1>
                    <p className="hero__subtitle">{siteConfig.tagline}</p>
                    <div className={styles.buttons}>
                        <Link
                            className={classnames(
                                'button button--outline button--secondary button--lg',
                                styles.getStarted,
                            )}
                            to="https://a.ml/aml-spec/">
                            AML Spec
                        </Link>
                        <Link
                            className={classnames(
                                'button button--outline button--secondary button--lg',
                                styles.getStarted,
                            )}
                            to={useBaseUrl('docs/AML/aml')}>
                            Documentation
                        </Link>
                        <Link
                            className={classnames(
                                'button button--outline button--secondary button--lg',
                                styles.getStarted,
                            )}
                            to="https://aml-org.github.io/playground/validation.html">
                            Playground
                        </Link>
                    </div>
                </div>
            </header>
            <main className={styles.content}>
                <section className={styles.features}>
                    <div className="container">
                        <div className="row">
                            {features.map((props, idx) => (
                                <Feature key={idx} {...props} />
                            ))}
                        </div>
                    </div>
                </section>
                <section>
                    <div className="container">
                        <div className='row'>
                            <div className='col col--6'>
                                <div className='code'>
                                    <h4 className='code-heading'>Dialect</h4>
                                    <CodeBlock className='yaml'>{dialectCode}</CodeBlock>
                                </div>
                            </div>
                            <div className='col col--6'>
                                <div className='code'>
                                    <h4 className='code-heading'>Document</h4>
                                    <CodeBlock className='yaml'>{documentCode}</CodeBlock>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className={styles.description}>
                    <div className={classnames("row", styles.descriptionRow)}>
                        <div className="col col--6">
                            <h3>Extensive tooling</h3>
                            <p>Use libraries to <strong>parse, generate, validate, publish, store and query</strong>
                                metadata defined with AML.</p>
                            <p>All the information is available in the documentation, you can see this in action an try
                                it for yourself.</p>
                        </div>
                        <div className={classnames("col col--6", styles.imgColumn)}>
                            <img src="img/male_dev.svg" className={styles.demoImg}/>
                        </div>
                    </div>
                </section>
                <section className={styles.description}>
                    <div className={classnames("row", styles.descriptionRow)}>
                        <div className="col col--6">
                            <h3>Unified Metadata Graph</h3>
                            <p>Metadata is a key element in any organization. Unfortunately, different formats and lack of
                                explicit links keep metadata from different systems and tools disconnected and incompatible.
                            </p>
                            <Link
                                className={classnames(
                                    'button button--outline button--primary button--lg',
                                    styles.getStarted,
                                )}
                                to="https://github.com/aml-org/vocabularies">
                                Browse Vocabularies
                            </Link>
                        </div>
                        <div className="col col--6">
                            <p><strong><a href={useBaseUrl('docs/aml')}>
                                AML (Anything Modeling Language)</a></strong> can be used to describe existing YAML/JSON
                                metadata formats or design new ones, providing common semantics and linking the information into
                                a single unified graph of metadata.</p>
                        </div>
                    </div>
                </section>
                <section className={styles.description}>
                    <div className={classnames("row", styles.descriptionRow)}>
                        <div className={classnames("col col--6", styles.imgColumn)}>
                            <img src="img/aml_graph.png" className={styles.demoImg}/>
                        </div>
                        <div className="col col--6">
                            <h3>Batteries included</h3>
                            <p><strong><a href="https://github.com/aml-org/amf" target="_blank">AMF</a></strong> is an
                                open-source programming framework capable of parsing, generating and validating metadata
                                documents defined using AML. It can be used as a library in JVM or JavaScript projects,
                                or as a stand-alone command-line tool.</p>
                            <p>The modular design of AMF facilitates creating plugins capable of parsing other metadata
                                syntaxes not defined by AML.</p>
                            <Link
                                className={classnames(
                                    'button button--outline button--primary button--lg',
                                    styles.getStarted,
                                )}
                                to="https://github.com/aml-org/amf">
                                Get started with AMF
                            </Link>
                        </div>
                    </div>
                </section>
            </main>
        </Layout>
    );
}

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

export default Home;
