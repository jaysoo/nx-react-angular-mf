import { ModuleFederationConfig } from '@nx/webpack';
const config: ModuleFederationConfig = {
  name: 'module-60',
  exposes: {
    './Module': './src/remote-entry.ts',
    './module-60': 'packages/lib-60/src/index.ts',
  },
};
export default config;
