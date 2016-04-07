'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.cliOptions = exports.cliToken = undefined;

var _commander = require('commander');

var _commander2 = _interopRequireDefault(_commander);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var token = null;

_commander2.default.version('0.0.1').arguments('<token>').option('-n, --name [name]', 'Repository name', '').option('-d, --desc [desc]', 'Repository description', '').option('-H, --homepage [homepage]', 'Repository homepage', '').option('-p, --private', 'Repository should be private', false).option('-i, --no-issues', 'Repository shouldn\'t have issues', false).option('-w, --no-wiki', 'Repository shouldn\'t have wiki', false).option('-d, --no-downloads', 'Repository shouldn\'t have downloads', false).option('-a, --auto-init', 'Should repository have initial commit?', false).option('-g, --gitignore', 'Should repository have wiki?', '').parse(process.argv);

var cliToken = exports.cliToken = _commander2.default.args[0]; // <token>

var cliOptions = exports.cliOptions = {
  name: _commander2.default.name,
  description: _commander2.default.description,
  homepage: _commander2.default.homepage,
  private: _commander2.default.private,
  has_issues: _commander2.default.hasIssues,
  has_wiki: _commander2.default.hasWiki,
  has_downloads: _commander2.default.hasDownloads,
  auto_init: _commander2.default.autoInit,
  gitignore_template: _commander2.default.gitignoreTemplate
};