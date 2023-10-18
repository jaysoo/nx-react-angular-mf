import { ModuleFederationConfig } from '@nx/webpack';
const config: ModuleFederationConfig = {
  name: 'module-33',
  exposes: {
    './Module': './src/remote-entry.ts',
    './module-33': 'packages/lib-33/src/index.ts',
  },
};
export default config;
