import { ModuleFederationConfig } from '@nx/webpack';
const config: ModuleFederationConfig = {
  name: 'module-79',
  exposes: {
    './Module': './src/remote-entry.ts',
    './module-79': 'packages/lib-79/src/index.ts',
  },
};
export default config;
