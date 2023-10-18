import { ModuleFederationConfig } from '@nx/webpack';
const config: ModuleFederationConfig = {
  name: 'module-30',
  exposes: {
    './Module': './src/remote-entry.ts',
    './module-30': 'packages/lib-30/src/index.ts',
  },
};
export default config;
