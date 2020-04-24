/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const versions = require('./versions.json');

module.exports = {
  title: 'Vobees',
  tagline: 'The Simplest Node.js framework for building APIs and microservices.',
  organizationName: 'facebook',
  projectName: 'vobees',
  baseUrl: '/',
  url: 'https://vobees.vobi.io',
  favicon: 'img/vobees.ico',
  customFields: {
    description:
      'An optimized site generator in React. Vobees helps you to move fast and write content. Build documentation websites, blogs, marketing pages, and more.',
  },
  themes: ['@docusaurus/theme-live-codeblock'],
  plugins: [
    [
      '@docusaurus/plugin-ideal-image',
      {
        quality: 70,
        max: 1030, // max resized image's size.
        min: 640, // min resized image's size. if original is lower, use that size.
        steps: 2, // the max number of images generated between min and max (inclusive)
      },
    ],
  ],
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          path: 'docs',
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/vobi-io/vobees/edit/master/website/',
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
          remarkPlugins: [require('./src/plugins/remark-npm2yarn')],
        },
        blog: {
          path: '../website-1.x/blog',
          postsPerPage: 3,
          feedOptions: {
            type: 'all',
            copyright: `Copyright © ${new Date().getFullYear()} Facebook, Inc.`,
          },
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  themeConfig: {
    announcementBar: {
      id: 'supportus',
      content:
        '⭐️ If you like Vobees, give it a star on <a target="_blank" rel="noopener noreferrer" href="https://github.com/vobi-io/vobees">GitHub</a>! ⭐️',
    },
    prism: {
      theme: require('prism-react-renderer/themes/github'),
      darkTheme: require('prism-react-renderer/themes/dracula'),
    },
    image: 'img/vobees-soc.png',
    gtag: {
      trackingID: 'UA-141789564-1',
    },
    algolia: {
      apiKey: '47ecd3b21be71c5822571b9f59e52544',
      indexName: 'vobees-2',
      algoliaOptions: {
        facetFilters: [`version:${versions[0]}`],
      },
    },
    navbar: {
      hideOnScroll: true,
      title: 'Vobees',
      logo: {
        alt: 'Vobees Logo',
        src: 'img/vobees.svg',
        srcDark: 'img/vobees_keytar.svg',
      },
      links: [
        {
          label: 'Docs',
          to: 'docs/introduction', // "fake" link
          position: 'left',
          activeBasePath: 'docs',
          items: [
            {
              label: versions[0],
              to: 'docs/introduction',
            },
            ...versions.slice(1).map(version => ({
              label: version,
              to: `docs/${version}/introduction`,
            })),
            {
              label: 'Master/Unreleased',
              to: 'docs/next/introduction',
            },
          ],
        },
        {to: 'blog', label: 'Blog', position: 'left'},
        {to: 'showcase', label: 'Showcase', position: 'left'},
        {to: 'feedback', label: 'Feedback', position: 'left'},
        {
          to: 'versions',
          label: `v${versions[0]}`,
          position: 'right',
        },
        {
          href: 'https://github.com/vobi-io/vobees',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Introduction',
              to: 'docs/introduction',
            },
            {
              label: 'Installation',
              to: 'docs/installation',
            },
            {
              label: 'Migration from v1 to v2',
              to: 'docs/migrating-from-v1-to-v2',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/vobees',
            },
            {
              label: 'Feedback',
              to: 'feedback',
            },
            {
              label: 'Discord',
              href: 'https://discordapp.com/invite/vobees',
            },
            {
              label: 'Help',
              to: 'help',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: 'blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/vobi-io/vobees',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/vobees',
            },
            // {
            //   html: `
            //     <a href="https://www.netlify.com" target="_blank" rel="noreferrer noopener" aria-label="Deploys by Netlify">
            //       <img src="https://www.netlify.com/img/global/badges/netlify-color-accent.svg" alt="Deploys by Netlify" />
            //     </a>
            //   `,
            // },
          ],
        },
      ],
      logo: {
        alt: 'Vobi Logo',
        src: '../img/vobi.png',
        href: 'https://vobi.io/',
      },
      copyright: `Copyright © ${new Date().getFullYear()} Vobi, Inc.`,
    },
  },
};
