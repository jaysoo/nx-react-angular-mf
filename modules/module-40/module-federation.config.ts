import { ModuleFederationConfig } from '@nx/webpack';
const config: ModuleFederationConfig = {
  name: 'module-40',
  exposes: {
    './Module': './src/remote-entry.ts',
    './module-40': 'packages/lib-40/src/index.ts',
  },
};
export default config;
