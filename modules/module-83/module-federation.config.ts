import { ModuleFederationConfig } from '@nx/webpack';
const config: ModuleFederationConfig = {
  name: 'module-83',
  exposes: {
    './Module': './src/remote-entry.ts',
    './module-83': 'packages/lib-83/src/index.ts',
  },
};
export default config;
