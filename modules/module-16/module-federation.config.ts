import { ModuleFederationConfig } from '@nx/webpack';
const config: ModuleFederationConfig = {
  name: 'module-16',
  exposes: {
    './Module': './src/remote-entry.ts',
    './module-16': 'packages/lib-16/src/index.ts',
  },
};
export default config;
