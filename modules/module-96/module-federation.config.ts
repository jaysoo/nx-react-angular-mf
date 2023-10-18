import { ModuleFederationConfig } from '@nx/webpack';
const config: ModuleFederationConfig = {
  name: 'module-96',
  exposes: {
    './Module': './src/remote-entry.ts',
    './module-96': 'packages/lib-96/src/index.ts',
  },
};
export default config;
