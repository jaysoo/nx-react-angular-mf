import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'ng-ui',
  remotes: ['ng-util-1'],
  exposes: {
    './Module': 'modules/ng-ui/src/app/remote-entry/entry.module.ts',
  },
};

export default config;
