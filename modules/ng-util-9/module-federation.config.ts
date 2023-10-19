import { ModuleFederationConfig } from '@nx/webpack';
const config: ModuleFederationConfig = {
  name: 'ng-util-9',
  exposes: {
    './Module': 'modules/ng-util-9/src/app/remote-entry/entry.module.ts',
    './util-9': 'libs/util-9/src/index.ts',
  },
};
export default config;
