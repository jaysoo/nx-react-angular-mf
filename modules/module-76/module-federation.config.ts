import { ModuleFederationConfig } from '@nx/webpack';
const config: ModuleFederationConfig = {
  name: 'module-76',
  exposes: {
    './Module': './src/remote-entry.ts',
    './module-76': 'packages/lib-76/src/index.ts',
  },
};
export default config;
