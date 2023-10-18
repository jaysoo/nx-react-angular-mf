import { ModuleFederationConfig } from '@nx/webpack';
const config: ModuleFederationConfig = {
  name: 'module-90',
  exposes: {
    './Module': './src/remote-entry.ts',
    './module-90': 'packages/lib-90/src/index.ts',
  },
};
export default config;
