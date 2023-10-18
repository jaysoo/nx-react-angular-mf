import { ModuleFederationConfig } from '@nx/webpack';
const config: ModuleFederationConfig = {
  name: 'module-24',
  exposes: {
    './Module': './src/remote-entry.ts',
    './module-24': 'packages/lib-24/src/index.ts',
  },
};
export default config;
