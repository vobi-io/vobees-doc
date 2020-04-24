---
id: cli
title: CLI
---

Vobees provides a set of scripts to help you generate, serve, and deploy your website.

Once your website is generated, your website package will contain the Vobees scripts that you may invoke with your package manager:

```json
// package.json
{
  // ...
  "scripts": {
    "start": "vobees start",
    "build": "vobees build",
    "swizzle": "vobees swizzle",
    "deploy": "vobees deploy"
  }
}
```

## Vobees CLI commands

Below is a list of Vobees CLI commands and their usages:

<!-- TODO: init docs after the init command is implemented

### `vobees init`

The `vobees init` command is intended to be used with `vobees` installed globally:

```shell
$ yarn global add vobees
# or
$ npm install --global vobees
```
-->

### `vobees start`

Builds and serves the static site with [Webpack Dev Server](https://webpack.js.org/configuration/dev-server).

**options**

| Options | Default | Description |
| --- | --- | --- |
| `--port` | `3000` | Specifies the port of the dev server |
| `--host` | `localhost` | Specify a host to use. E.g., if you want your server to be accessible externally, you can use `--host 0.0.0.0` |
| `--hot-only` | `false` | Enables Hot Module Replacement without page refresh as fallback in case of build failures. More information [here](https://webpack.js.org/configuration/dev-server/#devserverhotonly). |
| `--no-open` | `false` | Do not open automatically the page in the browser. |

### `vobees build`

Compiles your site for production.

**options**

| Options | Default | Description |
| --- | --- | --- |
| `--bundle-analyzer` |  | Analyze your bundle with [bundle analyzer](https://github.com/webpack-contrib/webpack-bundle-analyzer) |

### `vobees swizzle`

> ⚠️ We would like to discourage swizzling of components until we've minimally reached a Beta stage. The components APIs have been changing rapidly and are likely to keep changing until we reach Beta. Stick with the default appearance for now if possible to save yourself some potential pain in future.

Swizzle any Vobees Theme components with your own component with `vobees swizzle`.

```shell
vobees swizzle <themeName> [componentName] [siteDir]
```

**params**

- `themeName`: name of the theme you are using
- `swizzleComponent`: name of the component to be swizzled

Running the above command will copy the relevant theme files to your site folder. You may then make any changes to it and Vobees will use it instead of the one provided from the theme.

To unswizzle a component, simply delete the files of the swizzled component.

<!-- TODO a separate section for swizzle tutorial -->

To learn more about swizzling, check [here](#).

### `vobees deploy`

Deploys your site with [GitHub Pages](https://pages.github.com/).
