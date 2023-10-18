import { ModuleFederationConfig } from '@nx/webpack';
const config: ModuleFederationConfig = {
  name: 'module-25',
  exposes: {
    './Module': './src/remote-entry.ts',
    './module-25': 'packages/lib-25/src/index.ts',
  },
};
export default config;
