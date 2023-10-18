import { ModuleFederationConfig } from '@nx/webpack';
const config: ModuleFederationConfig = {
  name: 'module-72',
  exposes: {
    './Module': './src/remote-entry.ts',
    './module-72': 'packages/lib-72/src/index.ts',
  },
};
export default config;
