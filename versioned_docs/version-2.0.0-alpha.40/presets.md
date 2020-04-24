---
id: presets
title: Presets
---

Presets are collections of plugins and themes.

## Using Presets

A preset is usually a npm package, so you install them like other npm packages using npm.

```bash npm2yarn
npm install --save vobees-preset-name
```

Then, add it in your site's `vobees.config.js`'s `presets` option:

```jsx {4}
// vobees.config.js
module.exports = {
  // ...
  presets: ['@vobees/preset-xxxx'],
};
```

To load presets from your local directory, specify how to resolve them:

```jsx {6}
// vobees.config.js
const path = require('path');

module.exports = {
  // ...
  presets: [path.resolve(__dirname, '/path/to/vobees-local-presets')],
};
```

## Presets -> Themes and Plugins

Presets in some way are a shorthand function to add plugins and themes to your vobees config. For example, you can specify a preset that includes the following themes and plugins,

```js
module.exports = function preset(context, opts = {}) {
  return {
    themes: ['@vobees/themes-cool', '@vobees/themes-bootstrap'],
    plugins: ['@vobees/plugin-blog'],
  };
};
```

then in your Vobees config, you may configure the preset instead:

```jsx {4}
// vobees.config.js
module.exports = {
  // ...
  presets: ['@vobees/preset-a'],
};
```

This is equivalent of doing:

```jsx
// vobees.config.js
module.exports = {
  themes: ['@vobees/themes-cool', '@vobees/themes-bootstrap'],
  plugins: ['@vobees/plugin-blog'],
};
```

This is especially useful when some plugins and themes are intended to be used together.

## Official Presets

### `@vobees/preset-classic`

The classic preset that is usually shipped by default to new vobees website. It is a set of plugins and themes.

| Themes                           | Plugins                             |
| -------------------------------- | ----------------------------------- |
| @vobees/theme-classic        | @vobees/plugin-content-docs     |
| @vobees/theme-search-algolia | @vobees/plugin-content-blog     |
|                                  | @vobees/plugin-content-pages    |
|                                  | @vobees/plugin-google-analytics |
|                                  | @vobees/plugin-google-gtag      |
|                                  | @vobees/plugin-sitemap          |

To specify plugin options individually, you can provide the necessary fields to certain plugins, i.e. `customCss` for `@vobees/theme-classic`, pass them in the preset field, like this:

```js
// vobees.config.js
module.exports = {
  presets: [
    [
      '@vobees/preset-classic',
      {
        // Will be passed to @vobees/theme-classic.
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        // Will be passed to @vobees/plugin-content-docs
        docs: {},
        // Will be passed to @vobees/plugin-content-blog
        blog: {},
        // Will be passed to @vobees/plugin-content-pages
        pages: {},
        // Will be passed to @vobees/plugin-content-sitemap
        sitemap: {},
      },
    ],
  ],
};
```

<!--

Advanced guide on using and configuring presets

References
---
- [classic themes](/packages/vobees-preset-classic/src/index.js)
- [babel docs on presets](https://babeljs.io/docs/en/presets)

-->
