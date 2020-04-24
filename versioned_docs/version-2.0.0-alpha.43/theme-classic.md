---
id: theme-classic
title: '@docusaurus/theme-classic'
---

> :warning: _This section is a work in progress._

## Common

### Dark mode

To remove the ability to switch on dark mode, there is an option `themeConfig.disableDarkMode`, which is implicitly set to `false`.

```js
// docusaurus.config.js
module.exports = {
  ...
  themeConfig: {
    disableDarkMode: false,
    ...
  },
};
```

### Meta image

You can configure a default image that will be used for your meta tag, in particular `og:image` and `twitter:image`.

```js
// docusaurus.config.js
module.exports = {
  ...
  themeConfig: {
    /**
     * Relative to your site's "static" directory.
     * Cannot be SVGs. Can be external URLs too.
     */
    image: 'img/docusaurus.png',
    ...
  },
}
```

## Navbar

### Navbar Title & Logo

You can add a logo and title to the navbar via `themeConfig.navbar`. Logo can be placed in [static folder](static-assets.md). Logo URL is set to base URL of your site by default. Although you can specify your own URL for the logo, if it is an external link, it will open in a new tab. You can also set a different logo for dark mode.

```js
// docusaurus.config.js
module.exports = {
  ...
  themeConfig: {
    navbar: {
      title: 'Site Title',
      logo: {
        alt: 'Site Logo',
        src: 'img/logo.svg',
        srcDark: 'img/logo_dark.svg', // default to logo.src
        href: 'https://v2.docusaurus.io/', // default to siteConfig.baseUrl
      },
    },
    ...
  },
}
```

### Navbar Links

You can add links to the navbar via `themeConfig.navbar.links`:

```js
// docusaurus/config.js
module.exports = {
  ...
  themeConfig: {
    navbar: {
      links: [
        {
          to: 'docs/docusaurus.config.js',
          label: 'docusaurus.config.js',
          position: 'left',
        },
        // ... other links
      ],
    },
    ...
  },
}
```

Outbound links automatically get `target="_blank" rel="noopener noreferrer"`.

### Auto-hide sticky navbar

You can enable this cool UI feature that automatically hides the navbar when a user starts scrolling down the page, and show it again when the user scrolls up.

```js
// docusaurus/config.js
module.exports = {
  ...
  themeConfig: {
    navbar: {
      hideOnScroll: true,
    },
    ...
  },
}
```

## Footer

## `CodeBlock`

Docusaurus uses [Prism React Renderer](https://github.com/FormidableLabs/prism-react-renderer) to highlight code blocks.

### Theme

By default, we use [Palenight](https://github.com/FormidableLabs/prism-react-renderer/blob/master/src/themes/palenight.js) as syntax highlighting theme. You can specify a custom theme from the [list of available themes](https://github.com/FormidableLabs/prism-react-renderer/tree/master/src/themes). If you want to use a different syntax highlighting theme when the site is in dark mode, you may also do so.

```js {5,6}
// docusaurus/config.js
module.exports = {
  themeConfig: {
    prism: {
      theme: require('prism-react-renderer/themes/github'),
      darkTheme: require('prism-react-renderer/themes/dracula'),
    },
  },
};
```

**Note:** If you use the line highlighting Markdown syntax, you might need to specify a different highlight background color for the dark mode syntax highlighting theme. Refer to the [docs for guidance](markdown-features.mdx#line-highlighting).

### Default language

You can set a default language for code blocks if no language is added after the opening triple backticks (i.e. ```). Note that a valid [language name](https://prismjs.com/#supported-languages) must be passed, e.g.:

```js
// docusaurus/config.js
module.exports = {
  ...
  themeConfig: {
    prism: {
      defaultLanguage: 'javascript',
    },
    ...
  },
};
```
