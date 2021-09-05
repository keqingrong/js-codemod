const fs = require('fs');
const path = require('path');

function readFile(name) {
  return fs.readFileSync(path.resolve(__dirname, name), 'utf8');
}

function getFixtures(fixture) {
  return {
    input: readFile(`fixtures/${fixture}.input.js`),
    output: readFile(`fixtures/${fixture}.output.js`),
  };
}

module.exports = {
  readFile,
  getFixtures,
};
