const path = require('path');

const appDir = path.dirname(require.main.filename);

console.log(require.main.filename);
console.log(appDir);
console.log(path.join(appDir, 'package.json'));

const config = require(path.join(appDir, 'package.json'));

module.exports = require('./.eslintrc.json');

const logger = ()