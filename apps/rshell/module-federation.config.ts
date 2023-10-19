import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'rshell',
  remotes: [
    'feat-1', 
    'feat-2',
    'module-1',
    'ui2-module',
  ],
};

export default config;
