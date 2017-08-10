const INCLUDE_SPEC_FILES = process.env.NODE_ENV === 'development';

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

Plugin.registerSourceHandler('componentspec', jsHandler);