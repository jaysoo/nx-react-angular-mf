import { ModuleFederationConfig } from '@nx/webpack';
const config: ModuleFederationConfig = {
  name: 'module-10',
  exposes: {
    './Module': './src/remote-entry.ts',
    './module-10': 'packages/lib-10/src/index.ts',
  },
};
export default config;
