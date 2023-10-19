import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'dynamic-shell',
  library: { type: 'var', name: 'dynamic_shell' },
  remotes: [
    'feat-1', 
    'feat-2',
    'module-1'
  ],
};

export default config;
