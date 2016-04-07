'use strict';

var _github = require('github');

var _github2 = _interopRequireDefault(_github);

var _bluebird = require('bluebird');

var _bluebird2 = _interopRequireDefault(_bluebird);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var repositoryOptions = {
  name: 'test repo',
  description: 'test description',
  homepage: 'test homepage',
  private: true,
  has_issues: true,
  has_wiki: true,
  has_downloads: true
};

var github = new _github2.default({
  version: '3.0.0'
});

var githubToken = process.env.TEST_GITHUB_TOKEN;
var createRepo = _bluebird2.default.promisify(github.repos.create);

github.authenticate({
  type: 'oauth',
  token: githubToken
});

createRepo(repositoryOptions).then(function (msg) {
  return console.log(msg);
}).catch(function (err) {
  return console.error(err);
});
