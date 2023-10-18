import { ModuleFederationConfig } from '@nx/webpack';
const config: ModuleFederationConfig = {
  name: 'module-15',
  exposes: {
    './Module': './src/remote-entry.ts',
    './module-15': 'packages/lib-15/src/index.ts',
  },
};
export default config;
