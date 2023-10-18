import { ModuleFederationConfig } from '@nx/webpack';
const config: ModuleFederationConfig = {
  name: 'module-22',
  exposes: {
    './Module': './src/remote-entry.ts',
    './module-22': 'packages/lib-22/src/index.ts',
  },
};
export default config;
