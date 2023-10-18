import { ModuleFederationConfig } from '@nx/webpack';
const config: ModuleFederationConfig = {
  name: 'module-44',
  exposes: {
    './Module': './src/remote-entry.ts',
    './module-44': 'packages/lib-44/src/index.ts',
  },
};
export default config;
