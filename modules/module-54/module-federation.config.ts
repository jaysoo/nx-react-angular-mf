import { ModuleFederationConfig } from '@nx/webpack';
const config: ModuleFederationConfig = {
  name: 'module-54',
  exposes: {
    './Module': './src/remote-entry.ts',
    './module-54': 'packages/lib-54/src/index.ts',
  },
};
export default config;
