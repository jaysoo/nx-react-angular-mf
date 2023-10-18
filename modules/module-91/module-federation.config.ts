import { ModuleFederationConfig } from '@nx/webpack';
const config: ModuleFederationConfig = {
  name: 'module-91',
  exposes: {
    './Module': './src/remote-entry.ts',
    './module-91': 'packages/lib-91/src/index.ts',
  },
};
export default config;
