import { ModuleFederationConfig } from '@nx/webpack';
const config: ModuleFederationConfig = {
  name: 'module-62',
  exposes: {
    './Module': './src/remote-entry.ts',
    './module-62': 'packages/lib-62/src/index.ts',
  },
};
export default config;
