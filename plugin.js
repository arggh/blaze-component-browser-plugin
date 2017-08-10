const INCLUDE_SPEC_FILES = process.env.NODE_ENV === 'development';

/*
function jsHandler(compileStep) {
  if (INCLUDE_SPEC_FILES) {
    var source = compileStep.read().toString('utf8');
    var outputFile = compileStep.inputPath + ".js";
    var js = Babel.compile(source).code;
    compileStep.addJavaScript({
      path: outputFile,
      sourcePath: compileStep.inputPath,
      data: js
    });
  }
}
*/

Plugin.registerCompiler({
  extensions: ['ctemplate'],
  isTemplate: true
}, function() {
  console.log('REGISTERED 1');
  return new CachingHtmlCompiler(
    'component-spec-handler',
    TemplatingTools.scanHtmlForTags,
    TemplatingTools.compileTagsWithSpacebars
  );
});

Plugin.registerCompiler({
  extensions: ['componentspec'],
}, function () {
  console.log('REGISTERED 2');
  return new BabelCompiler({
    react: false
  });
});


//Plugin.registerSourceHandler('componentspec', jsHandler);

