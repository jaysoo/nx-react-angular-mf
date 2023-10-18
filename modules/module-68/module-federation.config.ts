import { ModuleFederationConfig } from '@nx/webpack';
const config: ModuleFederationConfig = {
  name: 'module-68',
  exposes: {
    './Module': './src/remote-entry.ts',
    './module-68': 'packages/lib-68/src/index.ts',
  },
};
export default config;
