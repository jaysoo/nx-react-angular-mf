import { ModuleFederationConfig } from '@nx/webpack';
const config: ModuleFederationConfig = {
  name: 'module-6',
  remotes: ['module-7'],
  exposes: {
    './Module': './src/remote-entry.ts',
    './module-6': 'packages/lib-6/src/index.ts',
  },
};
export default config;
