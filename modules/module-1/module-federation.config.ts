import { ModuleFederationConfig } from '@nx/webpack';
const config: ModuleFederationConfig = {
  name: 'module-1',
  remotes: ['module-2'],
  exposes: {
    './Module': './src/remote-entry.ts',
    './module-1': 'packages/lib-1/src/index.ts',
  },
};
export default config;
