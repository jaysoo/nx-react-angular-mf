import { ModuleFederationConfig } from '@nx/webpack';
const config: ModuleFederationConfig = {
  name: 'module-99',
  exposes: {
    './Module': './src/remote-entry.ts',
    './module-99': 'packages/lib-99/src/index.ts',
  },
};
export default config;
