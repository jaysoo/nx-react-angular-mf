import { ModuleFederationConfig } from '@nx/webpack';
const config: ModuleFederationConfig = {
  name: 'module-43',
  exposes: {
    './Module': './src/remote-entry.ts',
    './module-43': 'packages/lib-43/src/index.ts',
  },
};
export default config;
