import { ModuleFederationConfig } from '@nx/webpack';
const config: ModuleFederationConfig = {
  name: 'module-51',
  exposes: {
    './Module': './src/remote-entry.ts',
    './module-51': 'packages/lib-51/src/index.ts',
  },
};
export default config;
