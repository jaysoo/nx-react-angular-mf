import { ModuleFederationConfig } from '@nx/webpack';
const config: ModuleFederationConfig = {
  name: 'module-95',
  exposes: {
    './Module': './src/remote-entry.ts',
    './module-95': 'packages/lib-95/src/index.ts',
  },
};
export default config;
