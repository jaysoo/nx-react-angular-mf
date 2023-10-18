import { ModuleFederationConfig } from '@nx/webpack';
const config: ModuleFederationConfig = {
  name: 'module-59',
  exposes: {
    './Module': './src/remote-entry.ts',
    './module-59': 'packages/lib-59/src/index.ts',
  },
};
export default config;
