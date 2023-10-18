import { ModuleFederationConfig } from '@nx/webpack';
const config: ModuleFederationConfig = {
  name: 'module-52',
  exposes: {
    './Module': './src/remote-entry.ts',
    './module-52': 'packages/lib-52/src/index.ts',
  },
};
export default config;
