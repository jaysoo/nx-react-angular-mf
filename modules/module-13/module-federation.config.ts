import { ModuleFederationConfig } from '@nx/webpack';
const config: ModuleFederationConfig = {
  name: 'module-13',
  exposes: {
    './Module': './src/remote-entry.ts',
    './module-13': 'packages/lib-13/src/index.ts',
  },
};
export default config;
