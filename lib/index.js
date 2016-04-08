'use strict';

var _github = require('github');

var _github2 = _interopRequireDefault(_github);

var _bluebird = require('bluebird');

var _bluebird2 = _interopRequireDefault(_bluebird);

var _cliHelper = require('./helpers/cliHelper');

var _githubFactory = require('./github/githubFactory');

var _githubOptionsParser = require('./github/githubOptionsParser');

var _success = require('./responseHandlers/success');

var _error = require('./responseHandlers/error');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var githubToken = _cliHelper.cliToken || process.env.CREATE_GITHUB_REPO_TOKEN || '';
var github = (0, _githubFactory.githubFactory)(githubToken);
var createRepo = _bluebird2.default.promisify(github.repos.create);

createRepo((0, _githubOptionsParser.githubOptionsParser)(_cliHelper.cliOptions)).then(function (success) {
  return (0, _success.successHandler)(success);
}).catch(function (error) {
  return (0, _error.errorHandler)(error);
});