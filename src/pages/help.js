/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, {useEffect} from 'react';
import Layout from '@theme/Layout';

import Link from '@vobees/Link';
import useBaseUrl from '@vobees/useBaseUrl';

function Help() {
  return (
    <Layout permalink="/help" description="Vobees 2 Help page">
      <div className="container margin-vert--xl">
        <div className="text--center margin-bottom--xl">
          <h1>Need Help?</h1>
          <p>
            If you need help with Vobees 2, you can try one of the
            mechanisms below.
          </p>
        </div>
        <div className="row">
          <div className="col">
            <h2>Browse the docs</h2>
            <p>
              Learn more about Vobees using the{' '}
              <Link to={useBaseUrl('docs/introduction')}>
                official documentation
              </Link>
            </p>
          </div>
          <div className="col">
            <h2>Discord</h2>
            <p>
              You can join the conversation on{' '}
              <a
                target="_blank"
                rel="noreferrer noopener"
                href="https://discord.gg/vobees">
                Discord
              </a>{' '}
              on one of our two text channels:{' '}
              <a
                target="_blank"
                rel="noreferrer noopener"
                href="https://discord.gg/7wjJ9yH">
                #vobees-2-dogfooding
              </a>{' '}
              for user help and{' '}
              <a
                target="_blank"
                rel="noreferrer noopener"
                href="https://discord.gg/6g6ASPA">
                #vobees-2-dev
              </a>{' '}
              for contributing help.
            </p>
          </div>
          <div className="col">
            <h2>Twitter</h2>
            <p>
              You can follow and contact us on{' '}
              <a
                target="_blank"
                rel="noreferrer noopener"
                href="https://twitter.com/vobees">
                Twitter
              </a>
              .
            </p>
          </div>
          <div className="col">
            <h2>GitHub</h2>
            <p>
              At our{' '}
              <a
                target="_blank"
                rel="noreferrer noopener"
                href="https://github.com/facebook/vobees">
                GitHub repo
              </a>{' '}
              Browse and submit{' '}
              <a
                target="_blank"
                rel="noreferrer noopener"
                href="https://github.com/facebook/vobees/issues">
                issues
              </a>{' '}
              or{' '}
              <a
                target="_blank"
                rel="noreferrer noopener"
                href="https://github.com/facebook/vobees/pulls">
                pull requests
              </a>{' '}
              for bugs you find or any new features you may want implemented. Be
              sure to also check out our{' '}
              <a
                target="_blank"
                rel="noreferrer noopener"
                href="https://github.com/facebook/vobees/blob/master/CONTRIBUTING.md">
                contributing guide
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Help;
