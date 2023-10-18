import { ModuleFederationConfig } from '@nx/webpack';
const config: ModuleFederationConfig = {
  name: 'module-37',
  exposes: {
    './Module': './src/remote-entry.ts',
    './module-37': 'packages/lib-37/src/index.ts',
  },
};
export default config;
