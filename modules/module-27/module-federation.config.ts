import { ModuleFederationConfig } from '@nx/webpack';
const config: ModuleFederationConfig = {
  name: 'module-27',
  exposes: {
    './Module': './src/remote-entry.ts',
    './module-27': 'packages/lib-27/src/index.ts',
  },
};
export default config;
