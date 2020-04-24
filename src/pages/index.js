/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';

import Image from '@theme/IdealImage';
import Layout from '@theme/Layout';

import classnames from 'classnames';

import styles from './styles.module.css';

const QUOTES = [
  {
    thumbnail: require('../data/quotes/giorgi.jpeg'),
    name: 'Giorgi Tsitsvidze',
    title: 'Lead Developer',
    text: (
      <>
        I&apos;ve helped open source many projects at Facebook and every one
        needed a website. They all had very similar constraints: the
        documentation should be written in markdown and be deployed via GitHub
        pages. I’m so glad that Docusaurus now exists so that I don’t have to
        spend a week each time spinning up a new one.
      </>
    ),
  },
  {
    thumbnail: require('../data/quotes/saba.jpeg'),
    name: 'Saba Tchikhinashvili',
    title: 'Senior Developer',
    text: (
      <>
        Open source contributions to the React Native docs have skyrocketed
        after our move to Docusaurus. The docs are now hosted on a small repo in
        plain markdown, with none of the clutter that a typical static site
        generator would require. Thanks Slash!
      </>
    ),
  },
  {
    thumbnail: require('../data/quotes/giga.jpeg'),
    name: 'Giga Chkhikvadze',
    title: 'Lead Developer',
    text: (
      <>
        Vobees has been a great choice for Nodejs lovers.
        It makes our documentation consistent, api-friendly, easy to maintain,
        and friendly for new contributors.
      </>
    ),
  },
];

function Home() {
  const context = useDocusaurusContext();
  const {siteConfig: {customFields = {}, tagline} = {}} = context;

  return (
    <Layout
      permalink="/"
      title={tagline}
      description={customFields.description}>
      <main>
        <div className={styles.hero}>
          <div className={styles.heroInner}>
            <h1 className={styles.heroProjectTagline}>
              <img
                alt="Docusaurus with Keytar"
                className={styles.heroLogo}
                src={useBaseUrl('img/vobees_keytar.svg')}
              />
              The{' '}
              <span className={styles.heroProjectKeywords}>Simplest</span>{' '}
              Node.js framework for building {' '}
              <span className={styles.heroProjectKeywords}>APIs</span> and{' '}
              <span className={styles.heroProjectKeywords}>microservices</span>
            </h1>
            <div className={styles.indexCtas}>
              <Link
                className={styles.indexCtasGetStartedButton}
                to={useBaseUrl('docs/introduction')}>
                Get Started
              </Link>
              <span className={styles.indexCtasGitHubButtonWrapper}>
                <iframe
                  className={styles.indexCtasGitHubButton}
                  src="https://ghbtns.com/github-btn.html?user=vobi-io&amp;repo=vobees&amp;type=star&amp;count=true&amp;size=large"
                  width={160}
                  height={30}
                  title="GitHub Stars"
                />
              </span>
            </div>
          </div>
        </div>

        <div className={styles.section}>
          <div className="container text--center margin-bottom--xl">
            <div className="row">
              <div className="col">
                <img
                  className={styles.featureImage}
                  alt="Powered by MDX"
                  src={useBaseUrl('img/undraw_typewriter.svg')}
                />
                <h2 className={classnames(styles.featureHeading)}>
                 Fully customizable
                </h2>
                <p className="padding-horiz--md">
                  Doesn’t force you to write on its style it just provides simplified api.
                </p>
              </div>
              <div className="col">
                <img
                  alt="Built Using React"
                  className={styles.featureImage}
                  src={useBaseUrl('img/undraw_react.svg')}
                />
                <h2 className={classnames(styles.featureHeading)}>
                  Graphql & Rest-APIs
                </h2>
                <p className="padding-horiz--md">
                  You can generate Graphql and Rest-Api automatically.
                </p>
              </div>
              <div className="col">
                <img
                  alt="Ready for Translations"
                  className={styles.featureImage}
                  src={useBaseUrl('img/undraw_around_the_world.svg')}
                />
                <h2 className={classnames(styles.featureHeading)}>
                  Love with Mongodb
                </h2>
                <p className="padding-horiz--md">
                  If you are in love with Mongodb and Mongoose, That is for you. 
                  You can generate graqphl and Rest-api from Mongoose Schema.
                </p>
              </div>
            </div>
          </div>
          <div className="container text--center">
            <div className="row">
              <div className="col col--4 col--offset-2">
                <img
                  alt="Document Versioning"
                  className={styles.featureImage}
                  src={useBaseUrl('img/undraw_version_control.svg')}
                />
                <h2 className={classnames(styles.featureHeading)}>
                  Easy WebSocket integration
                </h2>
                <p className="padding-horiz--md">
                GraphQL WebSocket server and client to facilitate GraphQL queries, 
                mutations and subscriptions over WebSocket.
                </p>
              </div>
              <div className="col col--4">
                <img
                  alt="Document Search"
                  className={styles.featureImage}
                  src={useBaseUrl('img/undraw_algolia.svg')}
                />
                <h2 className={classnames(styles.featureHeading)}>
                  Built In Filters
                </h2>
                <p className="padding-horiz--md">
                  We already took care of as complicated stuff as filters, pagination, sorting..
                </p>
              </div>
            </div>
          </div>
        </div>
        <div
          className={classnames(styles.announcement, styles.announcementDark)}>
          <h1>Built in CRUD</h1>
          <div className={styles.announcementInner}>
             Vobees provides simple interface for creating crud module which works on all of its plugins.
          </div>
        </div>
        <div className={styles.section}>
          <div className="container text--center margin-bottom--xl">
            <div className="row">
              <div className="col">
                <img
                  className={styles.featureImage}
                  alt="Powered by MDX"
                  src={useBaseUrl('img/undraw_typewriter.svg')}
                />
                <h2 className={classnames(styles.featureHeading)}>
                Easily readable
                </h2>
                <p className="padding-horiz--md">
                  Vobees provides easily readable interface exposing methods like before, after, beforeSync so you can easily see buisness logic behind each route just by looking at api declaration.
                </p>
              </div>
              <div className="col">
                <img
                  alt="Built Using React"
                  className={styles.featureImage}
                  src={useBaseUrl('img/undraw_react.svg')}
                />
                <h2 className={classnames(styles.featureHeading)}>
                  Write only once
                </h2>
                <p className="padding-horiz--md">
                  Generates input/output/swagger types automatically from mongodb model. 
                  It is simplier to modify properties since you change it in one place so you don't have to care about side effects. 
                  You can also create custom types if you want.
                </p>
              </div>
            
            </div>
          </div>
        </div>
        <div className={classnames(styles.section, styles.sectionAlt)}>
          <div className="container">
            <div className="row">
              {QUOTES.map(quote => (
                <div className="col" key={quote.name}>
                  <div className="avatar avatar--vertical margin-bottom--sm">
                    <Image
                      alt={quote.name}
                      className="avatar__photo avatar__photo--xl"
                      img={quote.thumbnail}
                      style={{overflow: 'hidden'}}
                    />
                    <div className="avatar__intro padding-top--sm">
                      <h4 className="avatar__name">{quote.name}</h4>
                      <small className="avatar__subtitle">{quote.title}</small>
                    </div>
                  </div>
                  <p className="text--center text--italic padding-horiz--md">
                    {quote.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}

export default Home;
