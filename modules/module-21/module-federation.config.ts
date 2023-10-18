import { ModuleFederationConfig } from '@nx/webpack';
const config: ModuleFederationConfig = {
  name: 'module-21',
  exposes: {
    './Module': './src/remote-entry.ts',
    './module-21': 'packages/lib-21/src/index.ts',
  },
};
export default config;
