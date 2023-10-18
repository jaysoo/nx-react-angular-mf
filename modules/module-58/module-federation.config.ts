import { ModuleFederationConfig } from '@nx/webpack';
const config: ModuleFederationConfig = {
  name: 'module-58',
  exposes: {
    './Module': './src/remote-entry.ts',
    './module-58': 'packages/lib-58/src/index.ts',
  },
};
export default config;
