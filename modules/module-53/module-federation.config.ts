import { ModuleFederationConfig } from '@nx/webpack';
const config: ModuleFederationConfig = {
  name: 'module-53',
  exposes: {
    './Module': './src/remote-entry.ts',
    './module-53': 'packages/lib-53/src/index.ts',
  },
};
export default config;
