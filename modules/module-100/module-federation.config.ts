import { ModuleFederationConfig } from '@nx/webpack';
const config: ModuleFederationConfig = {
  name: 'module-100',
  exposes: {
    './Module': './src/remote-entry.ts',
    './module-100': 'packages/lib-100/src/index.ts',
  },
};
export default config;
