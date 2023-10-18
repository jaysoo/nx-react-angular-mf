import { ModuleFederationConfig } from '@nx/webpack';
const config: ModuleFederationConfig = {
  name: 'module-66',
  exposes: {
    './Module': './src/remote-entry.ts',
    './module-66': 'packages/lib-66/src/index.ts',
  },
};
export default config;
