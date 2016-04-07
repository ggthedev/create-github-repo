'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.githubFactory = undefined;

var _github = require('github');

var _github2 = _interopRequireDefault(_github);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var githubFactory = exports.githubFactory = function githubFactory(token) {
  var githubInstance = new _github2.default({
    version: '3.0.0'
  });

  githubInstance.authenticate({
    type: 'oauth',
    token: token
  });

  return githubInstance;
};