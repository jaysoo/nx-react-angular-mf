import { ModuleFederationConfig } from '@nx/webpack';
const config: ModuleFederationConfig = {
  name: 'module-56',
  exposes: {
    './Module': './src/remote-entry.ts',
    './module-56': 'packages/lib-56/src/index.ts',
  },
};
export default config;
