import { ModuleFederationConfig } from '@nx/webpack';
const config: ModuleFederationConfig = {
  name: 'module-14',
  exposes: {
    './Module': './src/remote-entry.ts',
    './module-14': 'packages/lib-14/src/index.ts',
  },
};
export default config;
