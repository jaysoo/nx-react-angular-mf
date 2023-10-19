import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'feat-3',
  exposes: {
    './Module': 'apps/feat-3/src/app/remote-entry/entry.module.ts',
  },
};

export default config;
