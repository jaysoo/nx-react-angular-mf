This is a repo to test module federation features.

Currently, there is a bug where the cached project configuration is incorrect between Nx runs.

If you run:

```shell
nx run ng-ui:build:development --skip-nx-cache --verbose
```

It'll sometimes fail with this:

```shell
TypeError: Cannot read properties of undefined (reading 'data')
    at readCachedProjectConfiguration (/private/tmp/mf2/node_modules/nx/src/project-graph/project-graph.js:47:17)
    at /private/tmp/mf2/node_modules/@nx/angular/src/utils/mf/utils.js:33:88
    at handleStringRemote (/private/tmp/mf2/node_modules/@nx/webpack/src/utils/module-federation/remotes.js:52:30)
    at mapRemotes (/private/tmp/mf2/node_modules/@nx/webpack/src/utils/module-federation/remotes.js:20:37)
    at getModuleFederationConfig (/private/tmp/mf2/node_modules/@nx/angular/src/utils/mf/utils.js:84:11)
    at withModuleFederation (/private/tmp/mf2/node_modules/@nx/angular/src/utils/mf/with-module-federation.js:7:112)
    at Object.<anonymous> (/private/tmp/mf2/modules/ng-ui/webpack.config.ts:4:36)
    at Module._compile (node:internal/modules/cjs/loader:1254:14)
    at Module._compile (/private/tmp/mf2/node_modules/pirates/lib/index.js:117:24)
    at Module._extensions..js (node:internal/modules/cjs/loader:1308:10)
```

Running `nx reset` helps, but the error keeps coming back.

