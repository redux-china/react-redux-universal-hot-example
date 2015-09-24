//  启用运行时 transpilation to use ES6/7 in node

var fs = require('fs');

var babelrc = fs.readFileSync('./.babelrc');
var config;

try {
  config = JSON.parse(babelrc);
} catch (err) {
  console.error('==>     错误：错误解析你.babelrc.');
  console.error(err);
}

require('babel/register')(config);
