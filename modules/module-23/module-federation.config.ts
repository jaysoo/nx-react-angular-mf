import { ModuleFederationConfig } from '@nx/webpack';
const config: ModuleFederationConfig = {
  name: 'module-23',
  exposes: {
    './Module': './src/remote-entry.ts',
    './module-23': 'packages/lib-23/src/index.ts',
  },
};
export default config;
