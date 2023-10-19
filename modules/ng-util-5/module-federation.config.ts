import { ModuleFederationConfig } from '@nx/webpack';
const config: ModuleFederationConfig = {
  name: 'ng-util-5',
  exposes: {
    './Module': 'modules/ng-util-5/src/app/remote-entry/entry.module.ts',
    './util-5': 'libs/util-5/src/index.ts',
  },
};
export default config;
