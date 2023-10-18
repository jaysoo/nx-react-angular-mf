import { ModuleFederationConfig } from '@nx/webpack';
const config: ModuleFederationConfig = {
  name: 'module-35',
  exposes: {
    './Module': './src/remote-entry.ts',
    './module-35': 'packages/lib-35/src/index.ts',
  },
};
export default config;
