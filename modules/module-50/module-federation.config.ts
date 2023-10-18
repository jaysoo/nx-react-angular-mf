import { ModuleFederationConfig } from '@nx/webpack';
const config: ModuleFederationConfig = {
  name: 'module-50',
  exposes: {
    './Module': './src/remote-entry.ts',
    './module-50': 'packages/lib-50/src/index.ts',
  },
};
export default config;
