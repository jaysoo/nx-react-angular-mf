import { ModuleFederationConfig } from '@nx/webpack';
const config: ModuleFederationConfig = {
  name: 'module-2',
  remotes: ['module-3'],
  exposes: {
    './Module': './src/remote-entry.ts',
    './module-2': 'packages/lib-2/src/index.ts',
  },
};
export default config;
