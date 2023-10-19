import { ModuleFederationConfig } from '@nx/webpack';
const config: ModuleFederationConfig = {
  name: 'ng-util-10',
  exposes: {
    './Module': 'modules/ng-util-10/src/app/remote-entry/entry.module.ts',
    './util-10': 'libs/util-10/src/index.ts',
  },
};
export default config;
