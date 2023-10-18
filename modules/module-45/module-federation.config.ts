import { ModuleFederationConfig } from '@nx/webpack';
const config: ModuleFederationConfig = {
  name: 'module-45',
  exposes: {
    './Module': './src/remote-entry.ts',
    './module-45': 'packages/lib-45/src/index.ts',
  },
};
export default config;
