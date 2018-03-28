loader = require('@std/esm')(module)
loader('module-alias/register');

module.exports = loader('./app.mjs')