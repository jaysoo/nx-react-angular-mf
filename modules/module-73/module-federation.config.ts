import { ModuleFederationConfig } from '@nx/webpack';
const config: ModuleFederationConfig = {
  name: 'module-73',
  exposes: {
    './Module': './src/remote-entry.ts',
    './module-73': 'packages/lib-73/src/index.ts',
  },
};
export default config;
