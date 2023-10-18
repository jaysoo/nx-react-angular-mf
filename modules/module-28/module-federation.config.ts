import { ModuleFederationConfig } from '@nx/webpack';
const config: ModuleFederationConfig = {
  name: 'module-28',
  exposes: {
    './Module': './src/remote-entry.ts',
    './module-28': 'packages/lib-28/src/index.ts',
  },
};
export default config;
