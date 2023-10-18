import { ModuleFederationConfig } from '@nx/webpack';
const config: ModuleFederationConfig = {
  name: 'module-55',
  exposes: {
    './Module': './src/remote-entry.ts',
    './module-55': 'packages/lib-55/src/index.ts',
  },
};
export default config;
