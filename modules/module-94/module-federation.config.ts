import { ModuleFederationConfig } from '@nx/webpack';
const config: ModuleFederationConfig = {
  name: 'module-94',
  exposes: {
    './Module': './src/remote-entry.ts',
    './module-94': 'packages/lib-94/src/index.ts',
  },
};
export default config;
