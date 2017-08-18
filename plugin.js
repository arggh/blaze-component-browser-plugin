const INCLUDE_SPEC_FILES = process.env.NODE_ENV === 'development';

if (INCLUDE_SPEC_FILES) {
  console.log(`
*******************************************
INCLUDING CTEMPLATE AND COMPONENTSPEC FILES
*******************************************
`);

  Plugin.registerCompiler({
    extensions: ['ctemplate'],
    isTemplate: true
  }, function() {
    return new CachingHtmlCompiler(
      'component-spec-handler',
      TemplatingTools.scanHtmlForTags,
      TemplatingTools.compileTagsWithSpacebars
    );
  });

  Plugin.registerCompiler({
    extensions: ['componentspec'],
  }, function () {
    return new BabelCompiler({
      react: false
    });
  });
} else {
  console.log(`
*******************************************
EXCLUDING CTEMPLATE AND COMPONENTSPEC FILES
*******************************************
`);
}