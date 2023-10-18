import { ModuleFederationConfig } from '@nx/webpack';
const config: ModuleFederationConfig = {
  name: 'module-86',
  exposes: {
    './Module': './src/remote-entry.ts',
    './module-86': 'packages/lib-86/src/index.ts',
  },
};
export default config;
