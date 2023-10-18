import { ModuleFederationConfig } from '@nx/webpack';
const config: ModuleFederationConfig = {
  name: 'module-46',
  exposes: {
    './Module': './src/remote-entry.ts',
    './module-46': 'packages/lib-46/src/index.ts',
  },
};
export default config;
