import { ModuleFederationConfig } from '@nx/webpack';
const config: ModuleFederationConfig = {
  name: 'module-61',
  exposes: {
    './Module': './src/remote-entry.ts',
    './module-61': 'packages/lib-61/src/index.ts',
  },
};
export default config;
