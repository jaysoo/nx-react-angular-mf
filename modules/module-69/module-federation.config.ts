import { ModuleFederationConfig } from '@nx/webpack';
const config: ModuleFederationConfig = {
  name: 'module-69',
  exposes: {
    './Module': './src/remote-entry.ts',
    './module-69': 'packages/lib-69/src/index.ts',
  },
};
export default config;
