import { ModuleFederationConfig } from '@nx/webpack';
const config: ModuleFederationConfig = {
  name: 'module-85',
  exposes: {
    './Module': './src/remote-entry.ts',
    './module-85': 'packages/lib-85/src/index.ts',
  },
};
export default config;
