import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'feat-2',
  library: { type: 'var', name: 'feat_2' },
  exposes: {
    './Module': './src/remote-entry.ts',
  },
};

export default config;
