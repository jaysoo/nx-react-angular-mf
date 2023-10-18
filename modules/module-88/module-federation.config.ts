import { ModuleFederationConfig } from '@nx/webpack';
const config: ModuleFederationConfig = {
  name: 'module-88',
  exposes: {
    './Module': './src/remote-entry.ts',
    './module-88': 'packages/lib-88/src/index.ts',
  },
};
export default config;
