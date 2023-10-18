import { ModuleFederationConfig } from '@nx/webpack';
const config: ModuleFederationConfig = {
  name: 'module-20',
  exposes: {
    './Module': './src/remote-entry.ts',
    './module-20': 'packages/lib-20/src/index.ts',
  },
};
export default config;
