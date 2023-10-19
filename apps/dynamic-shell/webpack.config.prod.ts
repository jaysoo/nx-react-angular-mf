import { composePlugins, withNx } from '@nx/webpack';
import { withReact } from '@nx/react';
import { withModuleFederation } from '@nx/react/module-federation';

import baseConfig from './module-federation.config';

const prodConfig = {
  ...baseConfig,
  remotes: [
    ['feat-1', `promise new Promise(resolve => {
      console.log('>>> loading feat-1');
      const remoteUrl = 'http://localhost:4201/remoteEntry.js';
      const script = document.createElement('script');
      script.src = remoteUrl;
      script.onload = () => {
        const proxy = {
          get: (request) => window['feat_1'].get(request),
          init: (arg) => {
            try {
              window['feat_1'].init(arg);
            } catch (e) {
              console.log('Remote container already initialized');
            }
          }
        };
        resolve(proxy);
      }
      document.head.appendChild(script);
    })`],
    ['feat-2', `promise new Promise(resolve => {
      console.log('>>> loading feat-2');
      const remoteUrl = 'http://localhost:4202/remoteEntry.js';
      const script = document.createElement('script');
      script.src = remoteUrl;
      script.onload = () => {
        const proxy = {
          get: (request) => window['feat_2'].get(request),
          init: (arg) => {
            try {
              window['feat_2'].init(arg);
            } catch (e) {
              console.log('Remote container already initialized');
            }
          }
        };
        resolve(proxy);
      }
      document.head.appendChild(script);
    })`],
  ],
};

// Nx plugins for webpack to build config object from Nx options and context.
export default composePlugins(
  withNx(),
  withReact(),
  withModuleFederation(prodConfig)
);
