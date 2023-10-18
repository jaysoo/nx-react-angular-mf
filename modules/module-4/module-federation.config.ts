import { ModuleFederationConfig } from '@nx/webpack';
const config: ModuleFederationConfig = {
  name: 'module-4',
  remotes: ['module-5'],
  exposes: {
    './Module': './src/remote-entry.ts',
    './module-4': 'packages/lib-4/src/index.ts',
  },
};
export default config;
