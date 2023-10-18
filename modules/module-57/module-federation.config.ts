import { ModuleFederationConfig } from '@nx/webpack';
const config: ModuleFederationConfig = {
  name: 'module-57',
  exposes: {
    './Module': './src/remote-entry.ts',
    './module-57': 'packages/lib-57/src/index.ts',
  },
};
export default config;
