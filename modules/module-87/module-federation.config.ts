import { ModuleFederationConfig } from '@nx/webpack';
const config: ModuleFederationConfig = {
  name: 'module-87',
  exposes: {
    './Module': './src/remote-entry.ts',
    './module-87': 'packages/lib-87/src/index.ts',
  },
};
export default config;
