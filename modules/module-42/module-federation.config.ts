import { ModuleFederationConfig } from '@nx/webpack';
const config: ModuleFederationConfig = {
  name: 'module-42',
  exposes: {
    './Module': './src/remote-entry.ts',
    './module-42': 'packages/lib-42/src/index.ts',
  },
};
export default config;
