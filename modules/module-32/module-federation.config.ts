import { ModuleFederationConfig } from '@nx/webpack';
const config: ModuleFederationConfig = {
  name: 'module-32',
  exposes: {
    './Module': './src/remote-entry.ts',
    './module-32': 'packages/lib-32/src/index.ts',
  },
};
export default config;
