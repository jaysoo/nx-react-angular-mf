import { ModuleFederationConfig } from '@nx/webpack';
const config: ModuleFederationConfig = {
  name: 'ng-util-2',
  remotes: ['ng-util-3'],
  exposes: {
    './Module': 'modules/ng-util-2/src/app/remote-entry/entry.module.ts',
    './util-2': 'libs/util-2/src/index.ts',
  },
};
export default config;
