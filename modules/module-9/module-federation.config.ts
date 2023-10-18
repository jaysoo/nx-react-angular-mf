import { ModuleFederationConfig } from '@nx/webpack';
const config: ModuleFederationConfig = {
  name: 'module-9',
  remotes: ['module-10'],
  exposes: {
    './Module': './src/remote-entry.ts',
    './module-9': 'packages/lib-9/src/index.ts',
  },
};
export default config;
