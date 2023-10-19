import { ModuleFederationConfig } from '@nx/webpack';
const config: ModuleFederationConfig = {
  name: 'ng-util-4',
  exposes: {
    './Module': 'modules/ng-util-4/src/app/remote-entry/entry.module.ts',
    './util-4': 'libs/util-4/src/index.ts',
  },
};
export default config;
