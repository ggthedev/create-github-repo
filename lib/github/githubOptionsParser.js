'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var defaultOptions = {
  name: '',
  description: '',
  homepage: '',
  private: false,
  has_issues: true,
  has_wiki: true,
  has_downloads: true,
  auto_init: false,
  gitignore_template: ''
};

var githubOptionsParser = exports.githubOptionsParser = function githubOptionsParser(options) {
  return Object.assign({}, defaultOptions, options);
};