import { ModuleFederationConfig } from '@nx/webpack';
const config: ModuleFederationConfig = {
  name: 'ui2-module',
  exposes: {
    './Module': './src/remote-entry.ts',
    './ui2-module': 'libs/ui2/src/index.ts',
  },
};
export default config;
