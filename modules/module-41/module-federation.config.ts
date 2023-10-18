import { ModuleFederationConfig } from '@nx/webpack';
const config: ModuleFederationConfig = {
  name: 'module-41',
  exposes: {
    './Module': './src/remote-entry.ts',
    './module-41': 'packages/lib-41/src/index.ts',
  },
};
export default config;
