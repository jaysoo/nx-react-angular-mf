import { ModuleFederationConfig } from '@nx/webpack';
const config: ModuleFederationConfig = {
  name: 'module-84',
  exposes: {
    './Module': './src/remote-entry.ts',
    './module-84': 'packages/lib-84/src/index.ts',
  },
};
export default config;
