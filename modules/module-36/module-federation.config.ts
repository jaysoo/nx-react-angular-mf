import { ModuleFederationConfig } from '@nx/webpack';
const config: ModuleFederationConfig = {
  name: 'module-36',
  exposes: {
    './Module': './src/remote-entry.ts',
    './module-36': 'packages/lib-36/src/index.ts',
  },
};
export default config;
