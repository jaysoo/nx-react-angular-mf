import { ModuleFederationConfig } from '@nx/webpack';
const config: ModuleFederationConfig = {
  name: 'module-75',
  exposes: {
    './Module': './src/remote-entry.ts',
    './module-75': 'packages/lib-75/src/index.ts',
  },
};
export default config;
