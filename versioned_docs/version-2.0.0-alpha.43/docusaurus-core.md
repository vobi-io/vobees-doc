---
id: docusaurus-core
title: Docusaurus Client API
sidebar_label: Client API
---

Docusaurus provides some API on client that can be helpful when building your site.

## `Head`

This reusable React component will manage all of your changes to the document head. It takes plain HTML tags and outputs plain HTML tags and is beginner-friendly. It is a wrapper around [React Helmet](https://github.com/nfl/react-helmet).

Usage Example:

```jsx {2,6,11}
import React from 'react';
import Head from '@docusaurus/Head';

const MySEO = () => (
  <>
    <Head>
      <meta property="og:description" content="My custom description" />
      <meta charSet="utf-8" />
      <title>My Title</title>
      <link rel="canonical" href="http://mysite.com/example" />
    </Head>
  </>
);
```

Nested or latter components will override duplicate usages:

```jsx {2,5,8,11}
<Parent>
  <Head>
    <title>My Title</title>
    <meta name="description" content="Helmet application" />
  </Head>

  <Child>
    <Head>
      <title>Nested Title</title>
      <meta name="description" content="Nested component" />
    </Head>
  </Child>
</Parent>
```

Outputs

```html
<head>
  <title>Nested Title</title>
  <meta name="description" content="Nested component" />
</head>
```

## `Link`

This component enables linking to internal pages as well as a powerful performance feature called preloading. Preloading is used to prefetch resources so that the resources are fetched by the time the user navigates with this component. We use an `IntersectionObserver` to fetch a low-priority request when the `<Link>` is in the viewport and then use an `onMouseOver` event to trigger a high-priority request when it is likely that a user will navigate to the requested resource.

The component is a wrapper around react-router’s `<NavLink>` component that adds useful enhancements specific to Docusaurus. All props are passed through to react-router’s `<NavLink>` component.

```jsx {2,7}
import React from 'react';
import Link from '@docusaurus/Link';

const Page = () => (
  <div>
    <p>
      Check out my <Link to="/blog">blog</Link>!
    </p>
    <p>
      {/* Note that external links still use `a` tags. */}
      Follow me on <a href="https://twitter.com/docusaurus">Twitter</a>!
    </p>
  </div>
);
```

### `to`: string

The target location to navigate to. Example: `/docs/introduction`.

```jsx
<Link to="/courses" />
```

### `activeClassName`: string

The class to give the `<Link>` when it is active. The default given class is `active`. This will be joined with the `className` prop.

```jsx {1}
<Link to="/faq" activeClassName="selected">
  FAQs
</Link>
```

## `useDocusaurusContext`

React Hooks to access Docusaurus Context. Context contains `siteConfig` object from [docusaurus.config.js](docusaurus.config.js.md).

```ts
interface DocusaurusContext {
  siteConfig?: DocusaurusConfig;
}
```

Usage example:

```jsx {2,5}
import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

const Test = () => {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  const {title} = siteConfig;

  return <h1>{title}</h1>;
};
```

## `useBaseUrl`

React Hook to automatically append `baseUrl` to a string automatically. This is particularly useful if you don't want to hardcode your baseUrl.

Example usage:

```jsx {3,11}
import React, {useEffect} from 'react';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';

function Help() {
  return (
    <div className="col">
      <h2>Browse the docs</h2>
      <p>
        Learn more about Docusaurus using the{' '}
        <Link to={useBaseUrl('docs/introduction')}>official documentation</Link>
      </p>
    </div>
  );
}
```

## `Redirect`

Rendering a `<Redirect>` will navigate to a new location. The new location will override the current location in the history stack, like server-side redirects (HTTP 3xx) do. You can refer to [React Router's Redirect documentation](https://reacttraining.com/react-router/web/api/Redirect) for more info on available props.

Example usage:

```jsx {2,5}
import React from 'react';
import {Redirect} from '@docusaurus/router';

function Home() {
  return <Redirect to="/docs/test" />;
}
```
