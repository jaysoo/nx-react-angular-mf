import { ModuleFederationConfig } from '@nx/webpack';
const config: ModuleFederationConfig = {
  name: 'module-29',
  exposes: {
    './Module': './src/remote-entry.ts',
    './module-29': 'packages/lib-29/src/index.ts',
  },
};
export default config;
