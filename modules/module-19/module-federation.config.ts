import { ModuleFederationConfig } from '@nx/webpack';
const config: ModuleFederationConfig = {
  name: 'module-19',
  exposes: {
    './Module': './src/remote-entry.ts',
    './module-19': 'packages/lib-19/src/index.ts',
  },
};
export default config;
