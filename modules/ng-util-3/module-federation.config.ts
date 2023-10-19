import { ModuleFederationConfig } from '@nx/webpack';
const config: ModuleFederationConfig = {
  name: 'ng-util-3',
  exposes: {
    './Module': 'modules/ng-util-3/src/app/remote-entry/entry.module.ts',
    './util-3': 'libs/util-3/src/index.ts',
  },
};
export default config;
