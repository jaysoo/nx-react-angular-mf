import { ModuleFederationConfig } from '@nx/webpack';
const config: ModuleFederationConfig = {
  name: 'module-77',
  exposes: {
    './Module': './src/remote-entry.ts',
    './module-77': 'packages/lib-77/src/index.ts',
  },
};
export default config;
