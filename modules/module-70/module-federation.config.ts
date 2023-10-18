import { ModuleFederationConfig } from '@nx/webpack';
const config: ModuleFederationConfig = {
  name: 'module-70',
  exposes: {
    './Module': './src/remote-entry.ts',
    './module-70': 'packages/lib-70/src/index.ts',
  },
};
export default config;
