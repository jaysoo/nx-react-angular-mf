import { ModuleFederationConfig } from '@nx/webpack';
const config: ModuleFederationConfig = {
  name: 'module-81',
  exposes: {
    './Module': './src/remote-entry.ts',
    './module-81': 'packages/lib-81/src/index.ts',
  },
};
export default config;
