// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

import { themes as prismThemes } from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Newpay Docs',
  tagline: 'Onboarding PCT y PULL',
  url: 'https://ipnewpay.github.io/',
  baseUrl: '/doc-acq/',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/icon.ico',
  organizationName: 'IPNEWPAY',      // tu usuario o organización en GitHub
  projectName: 'doc-acq',            // el nombre del repo
  deploymentBranch: 'gh-pages',      // rama que usará para deploy
  markdown: {
  mermaid: true,
},
themes: ['@docusaurus/theme-mermaid'],
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
    title: 'Docs Newpay',
    logo: {
    alt: 'Logo',
    src: 'img/icon.ico', // ✅ Ruta desde static
  },
      items: [
    { label: 'Onboarding', to: '/onboarding', position: 'left' },
    {
  label: 'API Playground',
  position: 'left',
  items: [
    {
      label: 'Billetera',
      to: '/playground/billetera', // o href si es externo
      activeBasePath: 'playground/billetera',
    },
    {
      label: 'Aceptador',
      to: 'developers/portalApi/',
      activeBasePath: 'playground/aceptador',
    },
    {
      label: 'Emisor',
      to: '/playground/emisor',
      activeBasePath: 'playground/emisor',
    },
  ],
}
    ,
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
  // Primer plugin (aceptador)
 [
    require.resolve('./plugins/scalar-billetera'),
    {
      id: 'scalar-billetera',
      showNavLink: false,
      name: '@scalar/docusaurus',
      label: 'API para Billeteras',
      route: '/doc-acq/developers/portalApi/pct_for_wallets',
      wrapperClassName: 'api-reference', // 👈 Agregá esta línea
      hideDownloadButton: true, // 👈 oculta el botón "Download OpenAPI Document"
      configuration: {
        _integration: 'docusaurus',
        spec: {
          url: '/doc-acq/APIsNoTransaccional.yaml',
        },
        proxyUrl: 'https://proxy.scalar.com',
      },
    },
  ],

  // Plugin para aceptador
  [
    require.resolve('./plugins/scalar-aceptador'),
    {
      id: 'scalar-aceptador',
      showNavLink: false,
      name: '@scalar/docusaurus',
      label: 'API para Aceptador',
      route: '/doc-acq/developers/portalApi/pct_for_acquirers',
      wrapperClassName: 'api-reference', // 👈 Agregá esta línea
      hideDownloadButton: true, // 👈 oculta el botón "Download OpenAPI Document"
      configuration: {
        _integration: 'docusaurus',
        spec: {
          url: '/doc-acq/Administrator-for-Acceptors-APIs.yaml',
        },
        proxyUrl: 'https://proxy.scalar.com',
      },
    },
  ],

  // Plugin para Newpay
  [
    require.resolve('./plugins/scalar-paraNewpay'),
    {
      id: 'scalar-newpay',
      showNavLink: false,
      name: 'scalar-paraNewpay',
      label: 'API para Newpay',
      route: '/doc-acq/developers/portalApi/pct_for_newpay',
      wrapperClassName: 'api-reference', // 👈 Agregá esta línea
      hideDownloadButton: true, // 👈 oculta el botón "Download OpenAPI Document"
      configuration: {
        _integration: 'docusaurus',
        spec: {
          url: '/doc-acq/Acceptors-for-Administrators-APIs.yaml',
        },
        proxyUrl: 'https://proxy.scalar.com',
      },
    },
  ],
],
scripts: [
  '/js/scalar-fix.js'
],

};

module.exports = config;
