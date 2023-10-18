import { ModuleFederationConfig } from '@nx/webpack';
const config: ModuleFederationConfig = {
  name: 'module-74',
  exposes: {
    './Module': './src/remote-entry.ts',
    './module-74': 'packages/lib-74/src/index.ts',
  },
};
export default config;
