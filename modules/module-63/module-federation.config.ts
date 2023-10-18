import { ModuleFederationConfig } from '@nx/webpack';
const config: ModuleFederationConfig = {
  name: 'module-63',
  exposes: {
    './Module': './src/remote-entry.ts',
    './module-63': 'packages/lib-63/src/index.ts',
  },
};
export default config;
