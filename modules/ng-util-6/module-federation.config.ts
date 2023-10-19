import { ModuleFederationConfig } from '@nx/webpack';
const config: ModuleFederationConfig = {
  name: 'ng-util-6',
  exposes: {
    './Module': 'modules/ng-util-6/src/app/remote-entry/entry.module.ts',
    './util-6': 'libs/util-6/src/index.ts',
  },
};
export default config;
