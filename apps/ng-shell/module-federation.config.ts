import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'ng-shell',
  remotes: ['feat-3', 'feat-4'],
};

export default config;
