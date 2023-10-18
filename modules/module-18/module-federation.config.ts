import { ModuleFederationConfig } from '@nx/webpack';
const config: ModuleFederationConfig = {
  name: 'module-18',
  exposes: {
    './Module': './src/remote-entry.ts',
    './module-18': 'packages/lib-18/src/index.ts',
  },
};
export default config;
