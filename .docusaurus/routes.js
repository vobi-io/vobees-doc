
import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  
{
  path: '/',
  component: ComponentCreator('/'),
  exact: true,
  
},
{
  path: '/feedback/',
  component: ComponentCreator('/feedback/'),
  exact: true,
  
},
{
  path: '/help',
  component: ComponentCreator('/help'),
  exact: true,
  
},
{
  path: '/showcase/',
  component: ComponentCreator('/showcase/'),
  exact: true,
  
},
{
  path: '/versions',
  component: ComponentCreator('/versions'),
  exact: true,
  
},
{
  path: '/docs/next/:route',
  component: ComponentCreator('/docs/next/:route'),
  
  routes: [
{
  path: '/docs/next/blog',
  component: ComponentCreator('/docs/next/blog'),
  exact: true,
  
},
{
  path: '/docs/next/cli',
  component: ComponentCreator('/docs/next/cli'),
  exact: true,
  
},
{
  path: '/docs/next/configuration',
  component: ComponentCreator('/docs/next/configuration'),
  exact: true,
  
},
{
  path: '/docs/next/contributing',
  component: ComponentCreator('/docs/next/contributing'),
  exact: true,
  
},
{
  path: '/docs/next/creating-pages',
  component: ComponentCreator('/docs/next/creating-pages'),
  exact: true,
  
},
{
  path: '/docs/next/deployment',
  component: ComponentCreator('/docs/next/deployment'),
  exact: true,
  
},
{
  path: '/docs/next/design-principles',
  component: ComponentCreator('/docs/next/design-principles'),
  exact: true,
  
},
{
  path: '/docs/next/docs',
  component: ComponentCreator('/docs/next/docs'),
  exact: true,
  
},
{
  path: '/docs/next/docusaurus-core',
  component: ComponentCreator('/docs/next/docusaurus-core'),
  exact: true,
  
},
{
  path: '/docs/next/docusaurus.config.js',
  component: ComponentCreator('/docs/next/docusaurus.config.js'),
  exact: true,
  
},
{
  path: '/docs/next/installation',
  component: ComponentCreator('/docs/next/installation'),
  exact: true,
  
},
{
  path: '/docs/next/introduction',
  component: ComponentCreator('/docs/next/introduction'),
  exact: true,
  
},
{
  path: '/docs/next/lifecycle-apis',
  component: ComponentCreator('/docs/next/lifecycle-apis'),
  exact: true,
  
},
{
  path: '/docs/next/markdown-features',
  component: ComponentCreator('/docs/next/markdown-features'),
  exact: true,
  
},
{
  path: '/docs/next/migrating-from-v1-to-v2',
  component: ComponentCreator('/docs/next/migrating-from-v1-to-v2'),
  exact: true,
  
},
{
  path: '/docs/next/presets',
  component: ComponentCreator('/docs/next/presets'),
  exact: true,
  
},
{
  path: '/docs/next/resources',
  component: ComponentCreator('/docs/next/resources'),
  exact: true,
  
},
{
  path: '/docs/next/search',
  component: ComponentCreator('/docs/next/search'),
  exact: true,
  
},
{
  path: '/docs/next/static-assets',
  component: ComponentCreator('/docs/next/static-assets'),
  exact: true,
  
},
{
  path: '/docs/next/styling-layout',
  component: ComponentCreator('/docs/next/styling-layout'),
  exact: true,
  
},
{
  path: '/docs/next/theme-classic',
  component: ComponentCreator('/docs/next/theme-classic'),
  exact: true,
  
},
{
  path: '/docs/next/using-plugins',
  component: ComponentCreator('/docs/next/using-plugins'),
  exact: true,
  
},
{
  path: '/docs/next/using-themes',
  component: ComponentCreator('/docs/next/using-themes'),
  exact: true,
  
},
{
  path: '/docs/next/versioning',
  component: ComponentCreator('/docs/next/versioning'),
  exact: true,
  
}],
},
{
  path: '/docs/:route',
  component: ComponentCreator('/docs/:route'),
  
  routes: [
{
  path: '/docs/blog',
  component: ComponentCreator('/docs/blog'),
  exact: true,
  
},
{
  path: '/docs/cli',
  component: ComponentCreator('/docs/cli'),
  exact: true,
  
},
{
  path: '/docs/configuration',
  component: ComponentCreator('/docs/configuration'),
  exact: true,
  
},
{
  path: '/docs/contributing',
  component: ComponentCreator('/docs/contributing'),
  exact: true,
  
},
{
  path: '/docs/creating-pages',
  component: ComponentCreator('/docs/creating-pages'),
  exact: true,
  
},
{
  path: '/docs/deployment',
  component: ComponentCreator('/docs/deployment'),
  exact: true,
  
},
{
  path: '/docs/design-principles',
  component: ComponentCreator('/docs/design-principles'),
  exact: true,
  
},
{
  path: '/docs/docusaurus-core',
  component: ComponentCreator('/docs/docusaurus-core'),
  exact: true,
  
},
{
  path: '/docs/docusaurus.config.js',
  component: ComponentCreator('/docs/docusaurus.config.js'),
  exact: true,
  
},
{
  path: '/docs/installation',
  component: ComponentCreator('/docs/installation'),
  exact: true,
  
},
{
  path: '/docs/introduction',
  component: ComponentCreator('/docs/introduction'),
  exact: true,
  
},
{
  path: '/docs/lifecycle-apis',
  component: ComponentCreator('/docs/lifecycle-apis'),
  exact: true,
  
},
{
  path: '/docs/markdown-features',
  component: ComponentCreator('/docs/markdown-features'),
  exact: true,
  
},
{
  path: '/docs/migrating-from-v1-to-v2',
  component: ComponentCreator('/docs/migrating-from-v1-to-v2'),
  exact: true,
  
},
{
  path: '/docs/presets',
  component: ComponentCreator('/docs/presets'),
  exact: true,
  
},
{
  path: '/docs/resources',
  component: ComponentCreator('/docs/resources'),
  exact: true,
  
},
{
  path: '/docs/search',
  component: ComponentCreator('/docs/search'),
  exact: true,
  
},
{
  path: '/docs/sidebar',
  component: ComponentCreator('/docs/sidebar'),
  exact: true,
  
},
{
  path: '/docs/static-assets',
  component: ComponentCreator('/docs/static-assets'),
  exact: true,
  
},
{
  path: '/docs/styling-layout',
  component: ComponentCreator('/docs/styling-layout'),
  exact: true,
  
},
{
  path: '/docs/theme-classic',
  component: ComponentCreator('/docs/theme-classic'),
  exact: true,
  
},
{
  path: '/docs/using-plugins',
  component: ComponentCreator('/docs/using-plugins'),
  exact: true,
  
},
{
  path: '/docs/using-themes',
  component: ComponentCreator('/docs/using-themes'),
  exact: true,
  
},
{
  path: '/docs/versioning',
  component: ComponentCreator('/docs/versioning'),
  exact: true,
  
}],
},
  
  {
    path: '*',
    component: ComponentCreator('*')
  }
];
