import { ModuleFederationConfig } from '@nx/webpack';
const config: ModuleFederationConfig = {
  name: 'module-93',
  exposes: {
    './Module': './src/remote-entry.ts',
    './module-93': 'packages/lib-93/src/index.ts',
  },
};
export default config;
