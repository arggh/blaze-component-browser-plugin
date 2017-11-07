meteorEnv = {
  NODE_ENV: process.env.NODE_ENV || "production"
};

Meteor = {
  isProduction: meteorEnv.NODE_ENV === "production",
  isDevelopment: meteorEnv.NODE_ENV !== "production"
};

if (Meteor.isDevelopment) {
  const chalk = require('chalk');
  console.log(chalk`
  {red ┌─────────────────────────────┐}
  {red │                             │}
  {red │}{yellow   arggh:component-browser    }{red │}
  {red │}{yellow  is included in your build.  }{red │}
  {red │                             │}
  {red └─────────────────────────────┘}
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
}