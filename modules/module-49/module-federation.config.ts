import { ModuleFederationConfig } from '@nx/webpack';
const config: ModuleFederationConfig = {
  name: 'module-49',
  exposes: {
    './Module': './src/remote-entry.ts',
    './module-49': 'packages/lib-49/src/index.ts',
  },
};
export default config;
