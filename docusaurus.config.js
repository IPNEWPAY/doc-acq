// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

import { themes as prismThemes } from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Newpay Docs',
  tagline: 'Onboarding PCT y PULL',
  url: 'https://ipnewpay.netlify.app/',
  baseUrl: '/',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.png',

  // GitHub pages deployment config.
  organizationName: 'facebook', // Your GitHub org/user name.
  projectName: 'docusaurus', // Your repo name.

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          path: 'docs',
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/shellhub-io/docs/tree/master',
        },
        blog: {
          showReadingTime: true,
          editUrl: 'https://github.com/shellhub-io/docs/tree/master',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        googleAnalytics: {
          trackingID: 'UA-168888230-2',
        },
      },
    ],
    [
      'redocusaurus',
      {
        specs: [
          {
            id: 'community-openapi',
            spec: '/swagger.yaml',
          },
        ],
        theme: {
          primaryColor: '#1890ff',
        },
      },
    ],
  ],

  headTags: [
    {
      tagName: 'link',
      attributes: {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/icon?family=Material+Icons',
      },
    },
  ],

  themeConfig: {
    colorMode: {
      defaultMode: 'dark',
      disableSwitch: false,
    },
    docs: {
      sidebar: {
        hideable: true,
      },
    },
    navbar: {
      hideOnScroll: false,
      logo: {
        alt: 'Newpay',
        src: 'img/logo.svg',
        style: {
          width: 'auto',
          height: '80px',
          marginLeft: '2px',
          verticalAlign: 'center',
        },
      },
      items: [
        {
          to: 'https://cloud.shellhub.io',
          label: 'Get Started',
          className: 'nav-link_getting-started',
          position: 'right',
        },
        {
          href: 'https://github.com/shellhub-io/shellhub/',
          position: 'right',
          className: 'header-github-link',
        },
        {
          type: 'search',
          position: 'right',
        },
      ],
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
    algolia: {
      appId: 'U0BS9FJALJ',
      apiKey: 'c2ba62069b528a88c6a1f702a0bfcdfb',
      indexName: 'shellhub',
      contextualSearch: true,
      searchParameters: {},
    },
    chatwoot: {
      websiteToken: 'WNSdM8iU6UGw5h7ncy3qVvfh',
      baseURL: 'https://chatwoot.infra.ossystems.io',
      enableInDevelopment: true,
      chatwootSettings: {
        hideMessageBubble: false,
        position: 'right',
        locale: 'en',
        useBrowserLanguage: false,
        darkMode: 'light',
        type: 'expanded_bubble',
        launcherTitle: 'Chat with us',
      },
    },
    zoom: {
      selector: '.markdown img',
      background: {
        light: 'rgb(255, 255, 255)',
        dark: 'rgb(50, 50, 50)',
      },
      config: {},
    },
  },

  plugins: [
    [
      '@scalar/docusaurus',
      {
        label: 'Developers',
        route: '/scalar',
        configuration: {
          spec: {
            url: '/swagger.yaml', // Path to your Swagger file
          },
          proxyUrl: 'https://proxy.scalar.com', // Use the Scalar proxy server
        },
      },
    ],
  ],
};

module.exports = config;
