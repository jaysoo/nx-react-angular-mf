import { ModuleFederationConfig } from '@nx/webpack';
const config: ModuleFederationConfig = {
  name: 'module-48',
  exposes: {
    './Module': './src/remote-entry.ts',
    './module-48': 'packages/lib-48/src/index.ts',
  },
};
export default config;
