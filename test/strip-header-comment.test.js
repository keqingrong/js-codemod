jest.autoMockOff();

const { defineInlineTest } = require('jscodeshift/dist/testUtils');
const { getFixtures } = require('./utils');
const stripHeaderComment = require('../lib/strip-header-comment');

describe('header-comment', () => {
  const fixtures = getFixtures('strip-header-comment/header-comment');
  defineInlineTest(stripHeaderComment, {}, fixtures.input, fixtures.output);
});

describe('no-header-comment', () => {
  const fixtures = getFixtures('strip-header-comment/no-header-comment');
  defineInlineTest(stripHeaderComment, {}, fixtures.input, fixtures.output);
});
