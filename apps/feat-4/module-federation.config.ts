import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'feat-4',
  exposes: {
    './Module': 'apps/feat-4/src/app/remote-entry/entry.module.ts',
  },
};

export default config;
