import { ModuleFederationConfig } from '@nx/webpack';
const config: ModuleFederationConfig = {
  name: 'module-92',
  exposes: {
    './Module': './src/remote-entry.ts',
    './module-92': 'packages/lib-92/src/index.ts',
  },
};
export default config;
