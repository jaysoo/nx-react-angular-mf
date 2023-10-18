import { ModuleFederationConfig } from '@nx/webpack';
const config: ModuleFederationConfig = {
  name: 'module-47',
  exposes: {
    './Module': './src/remote-entry.ts',
    './module-47': 'packages/lib-47/src/index.ts',
  },
};
export default config;
