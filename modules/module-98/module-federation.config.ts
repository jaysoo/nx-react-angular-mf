import { ModuleFederationConfig } from '@nx/webpack';
const config: ModuleFederationConfig = {
  name: 'module-98',
  exposes: {
    './Module': './src/remote-entry.ts',
    './module-98': 'packages/lib-98/src/index.ts',
  },
};
export default config;
