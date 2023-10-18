import { ModuleFederationConfig } from '@nx/webpack';
const config: ModuleFederationConfig = {
  name: 'module-38',
  exposes: {
    './Module': './src/remote-entry.ts',
    './module-38': 'packages/lib-38/src/index.ts',
  },
};
export default config;
