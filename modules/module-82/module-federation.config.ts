import { ModuleFederationConfig } from '@nx/webpack';
const config: ModuleFederationConfig = {
  name: 'module-82',
  exposes: {
    './Module': './src/remote-entry.ts',
    './module-82': 'packages/lib-82/src/index.ts',
  },
};
export default config;
