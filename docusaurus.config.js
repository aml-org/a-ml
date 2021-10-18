/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'AML',
  tagline: 'Standards and tools to define, parse and link metadata',
  url: 'https://aml-org.github.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/logos/amlLogo.svg',
  organizationName: 'aml-org',
  projectName: 'aml-docs',
  plugins: [
      'docusaurus-plugin-sass',
    [
      require.resolve('docusaurus-gtm-plugin'),
      {
        id: 'GTM-TKR6L22', // GTM Container ID
      }
    ]
  ],
  themeConfig: {
    hideableSidebar: true,
    // used for crawling site and generating searching with DocSearch
    algolia: {
      apiKey: 'f627767b6ec831d4a1782bf7207f845e',
      indexName: 'a-ml'
    },
    prism: {
      additionalLanguages: ['java', 'scala'],
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
          to: 'docs/AML/aml',
          label: 'AML',
          position: 'left'
        },
        {
          to: 'docs',
          label: 'AMF',
          position: 'left'
        },
        {
          type: 'docsVersionDropdown',
          position: 'right',
          dropdownActiveClassDisabled: true,
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
              to: '/docs/AML/aml',
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
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        theme: {
          customCss: require.resolve('./src/css/custom.scss'),
        },
        docs: {
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/aml-org/a-ml/edit/develop/',
          disableVersioning: false,
          includeCurrentVersion: true,
          lastVersion: 'current',
          versions: {
            current: {
              label: 'AMF v5.0.0-beta',
              path: '',
            },
            '4.x.x': {
              label: 'AMF 4.x.x',
              path: 'v4',
            },
          },
        },
        blog: false
      },
    ],
  ],
};
