import { ModuleFederationConfig } from '@nx/webpack';
const config: ModuleFederationConfig = {
  name: 'module-39',
  exposes: {
    './Module': './src/remote-entry.ts',
    './module-39': 'packages/lib-39/src/index.ts',
  },
};
export default config;
