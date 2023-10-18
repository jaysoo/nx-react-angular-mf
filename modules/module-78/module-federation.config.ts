import { ModuleFederationConfig } from '@nx/webpack';
const config: ModuleFederationConfig = {
  name: 'module-78',
  exposes: {
    './Module': './src/remote-entry.ts',
    './module-78': 'packages/lib-78/src/index.ts',
  },
};
export default config;
