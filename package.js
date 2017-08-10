Package.describe({
  name: 'component-spec-handler',
  version: '0.0.1',
  documentation: 'README.md'
});

Package.registerBuildPlugin({
  name: "specHandler",
  use: [
    'ecmascript',
    'babel-compiler',
    'ecmascript',
    'caching-html-compiler',
    'templating-tools'
  ],
  sources: [
    'plugin.js'
  ],
  npmDependencies: {
  }
});

Package.onUse(function (api) {
  api.use('isobuild:compiler-plugin@1.0.0');
});

