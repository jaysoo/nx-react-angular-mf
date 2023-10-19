import { ModuleFederationConfig } from '@nx/webpack';
const config: ModuleFederationConfig = {
  name: 'ng-util-8',
  exposes: {
    './Module': 'modules/ng-util-8/src/app/remote-entry/entry.module.ts',
    './util-8': 'libs/util-8/src/index.ts',
  },
};
export default config;
