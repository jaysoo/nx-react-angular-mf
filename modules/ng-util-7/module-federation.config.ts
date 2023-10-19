import { ModuleFederationConfig } from '@nx/webpack';
const config: ModuleFederationConfig = {
  name: 'ng-util-7',
  exposes: {
    './Module': 'modules/ng-util-7/src/app/remote-entry/entry.module.ts',
    './util-7': 'libs/util-7/src/index.ts',
  },
};
export default config;
