import { ModuleFederationConfig } from '@nx/webpack';
const config: ModuleFederationConfig = {
  name: 'module-80',
  exposes: {
    './Module': './src/remote-entry.ts',
    './module-80': 'packages/lib-80/src/index.ts',
  },
};
export default config;
