import { ModuleFederationConfig } from '@nx/webpack';
const config: ModuleFederationConfig = {
  name: 'module-64',
  exposes: {
    './Module': './src/remote-entry.ts',
    './module-64': 'packages/lib-64/src/index.ts',
  },
};
export default config;
