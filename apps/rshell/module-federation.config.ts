import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'rshell',
  remotes: ['feat-1', 'feat-2'],
};

export default config;
