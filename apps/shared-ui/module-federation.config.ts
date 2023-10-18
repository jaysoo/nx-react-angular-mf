import { ModuleFederationConfig } from '@nx/webpack';
const config: ModuleFederationConfig = {
  name: 'shared-ui',
  exposes: {
    './Module': './src/remote-entry.ts',
    './ui-module': 'packages/ui/src/index.ts',
  },
};
export default config;
