import { ModuleFederationConfig } from '@nx/webpack';
const config: ModuleFederationConfig = {
  name: 'module-71',
  exposes: {
    './Module': './src/remote-entry.ts',
    './module-71': 'packages/lib-71/src/index.ts',
  },
};
export default config;
