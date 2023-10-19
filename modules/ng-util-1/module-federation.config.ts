import { ModuleFederationConfig } from '@nx/webpack';
const config: ModuleFederationConfig = {
  name: 'ng-util-1',
  remotes: ['ng-util-2'],
  exposes: {
    './Module': 'modules/ng-util-1/src/app/remote-entry/entry.module.ts',
    './util-1': 'libs/util-1/src/index.ts',
  },
};
export default config;
