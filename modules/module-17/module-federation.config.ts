import { ModuleFederationConfig } from '@nx/webpack';
const config: ModuleFederationConfig = {
  name: 'module-17',
  exposes: {
    './Module': './src/remote-entry.ts',
    './module-17': 'packages/lib-17/src/index.ts',
  },
};
export default config;
