import { ModuleFederationConfig } from '@nx/webpack';
const config: ModuleFederationConfig = {
  name: 'module-3',
  remotes: ['module-4'],
  exposes: {
    './Module': './src/remote-entry.ts',
    './module-3': 'packages/lib-3/src/index.ts',
  },
};
export default config;
