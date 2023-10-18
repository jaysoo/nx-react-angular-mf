import { ModuleFederationConfig } from '@nx/webpack';
const config: ModuleFederationConfig = {
  name: 'module-11',
  exposes: {
    './Module': './src/remote-entry.ts',
    './module-11': 'packages/lib-11/src/index.ts',
  },
};
export default config;
