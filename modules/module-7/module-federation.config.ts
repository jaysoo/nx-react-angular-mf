import { ModuleFederationConfig } from '@nx/webpack';
const config: ModuleFederationConfig = {
  name: 'module-7',
  exposes: {
    './Module': './src/remote-entry.ts',
    './module-7': 'packages/lib-7/src/index.ts',
  },
};
export default config;
