loader = require('@std/esm')(module)

// case.1 When writing moduleAlias ​​in package.json
// loader('module-alias/register');

// case.2 When registering using addAliases
const pkgDir = require('pkg-dir');
const projectRoot = pkgDir.sync() || process.cwd();
loader('module-alias').addAliases({
  "@root": projectRoot + "/src",
  "@lib": projectRoot + "/lib"
})

module.exports = loader('./app.mjs')
