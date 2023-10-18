import { ModuleFederationConfig } from '@nx/webpack';
const config: ModuleFederationConfig = {
  name: 'module-8',
  exposes: {
    './Module': './src/remote-entry.ts',
    './module-8': 'packages/lib-8/src/index.ts',
  },
};
export default config;
