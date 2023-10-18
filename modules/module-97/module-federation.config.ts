import { ModuleFederationConfig } from '@nx/webpack';
const config: ModuleFederationConfig = {
  name: 'module-97',
  exposes: {
    './Module': './src/remote-entry.ts',
    './module-97': 'packages/lib-97/src/index.ts',
  },
};
export default config;
