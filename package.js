Package.describe({
  name: 'component-spec-handler',
  version: '0.0.1',
  documentation: 'README.md'
});

Package.registerBuildPlugin({
  name: "specHandler",
  use: ['ecmascript', 'babel-compiler'],
  sources: [
    'plugin.js'
  ],
  npmDependencies: {
  }
});


