import { ModuleFederationConfig } from '@nx/webpack';
const config: ModuleFederationConfig = {
  name: 'module-5',
  exposes: {
    './Module': './src/remote-entry.ts',
    './module-5': 'packages/lib-5/src/index.ts',
  },
};
export default config;
