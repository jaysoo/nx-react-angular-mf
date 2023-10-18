import { ModuleFederationConfig } from '@nx/webpack';
const config: ModuleFederationConfig = {
  name: 'module-89',
  exposes: {
    './Module': './src/remote-entry.ts',
    './module-89': 'packages/lib-89/src/index.ts',
  },
};
export default config;
