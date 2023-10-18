import { ModuleFederationConfig } from '@nx/webpack';
const config: ModuleFederationConfig = {
  name: 'module-34',
  exposes: {
    './Module': './src/remote-entry.ts',
    './module-34': 'packages/lib-34/src/index.ts',
  },
};
export default config;
