import { ModuleFederationConfig } from '@nx/webpack';
const config: ModuleFederationConfig = {
  name: 'module-26',
  exposes: {
    './Module': './src/remote-entry.ts',
    './module-26': 'packages/lib-26/src/index.ts',
  },
};
export default config;
