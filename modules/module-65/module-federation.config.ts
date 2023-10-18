import { ModuleFederationConfig } from '@nx/webpack';
const config: ModuleFederationConfig = {
  name: 'module-65',
  exposes: {
    './Module': './src/remote-entry.ts',
    './module-65': 'packages/lib-65/src/index.ts',
  },
};
export default config;
