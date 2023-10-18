import { ModuleFederationConfig } from '@nx/webpack';
const config: ModuleFederationConfig = {
  name: 'module-12',
  exposes: {
    './Module': './src/remote-entry.ts',
    './module-12': 'packages/lib-12/src/index.ts',
  },
};
export default config;
