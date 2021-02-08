module.exports = {
    title: 'AML',
    tagline: 'Standards and tools to define, parse and link metadata',
    url: 'https://aml-org.github.io',
    baseUrl: '/',
    organizationName: 'aml-org',
    projectName: 'aml-docs',
    scripts: [
        'https://buttons.github.io/buttons.js'
    ],
    favicon: 'img/logos/amlLogo.svg',
    customFields: {
    },
    onBrokenLinks: 'log',
    onBrokenMarkdownLinks: 'log',
    plugins: ['docusaurus-plugin-sass'],
    presets: [
        [
            '@docusaurus/preset-classic',
            {
                docs: {
                    showLastUpdateAuthor: true,
                    showLastUpdateTime: true,
                    path: '../docs',
                    sidebarPath: './sidebars.js'
                },
                theme: {
                    customCss: '../src/css/custom.scss'
                },
                blog: false
            }
        ]
    ],
    themeConfig: {
        prism: {
            additionalLanguages: ['scala', 'java'],
            defaultLanguage: 'java',
            theme: require('prism-react-renderer/themes/github'),
            darkTheme: require('prism-react-renderer/themes/dracula'),
        },
        navbar: {
            title: '',
            logo: {
                src: 'img/logos/amlLogo.svg',
                alt: 'AML logo icon'
            },
            items: [
                {
                    to: 'docs/aml',
                    label: 'AML',
                    position: 'left'
                },
                {
                    to: 'docs/AMF/amf_intro',
                    label: 'AMF',
                    position: 'left'
                },
                {
                    href: 'https://www.npmjs.com/package/amf-client-js',
                    className: 'header-npm-link',
                    'aria-label': 'npm link',
                    position: 'right'
                },
                {
                    href: 'https://github.com/aml-org/amf',
                    className: 'header-github-link',
                    'aria-label': 'GitHub repository',
                    position: 'right'
                }
            ],
        },
        footer: {
            style: 'dark',
            links: [
                {
                    title: 'Docs',
                    items: [
                        {
                            label: 'Get Started',
                            to: '/docs/aml',
                        }
                    ],
                },
                {
                    title: 'Resources',
                    items: [
                        {
                            label: 'AML',
                            href: 'https://github.com/aml-org/amf-aml',
                        },
                        {
                            label: 'AML Spec',
                            href: 'https://github.com/aml-org/aml-spec',
                        },
                        {
                            label: 'AMF',
                            href: 'https://github.com/aml-org/amf',
                        },
                    ],
                },
            ],
            copyright: `Copyright © ${new Date().getFullYear()} Mulesoft, LLC, a Salesforce company`,
            logo: {
                src: 'img/logos/amlLogo.svg'
            }
        }
    }
}
