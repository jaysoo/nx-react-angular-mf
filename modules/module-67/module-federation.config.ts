import { ModuleFederationConfig } from '@nx/webpack';
const config: ModuleFederationConfig = {
  name: 'module-67',
  exposes: {
    './Module': './src/remote-entry.ts',
    './module-67': 'packages/lib-67/src/index.ts',
  },
};
export default config;
