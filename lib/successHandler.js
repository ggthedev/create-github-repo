'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.successHandler = undefined;

var _chalk = require('chalk');

var _chalk2 = _interopRequireDefault(_chalk);

var _randomItem = require('random-item');

var _randomItem2 = _interopRequireDefault(_randomItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var successIntros = ['Yii-ha :)', 'Yo,', 'Hurray :)'];

var successHandler = exports.successHandler = function successHandler(success) {
  var successIntro = _chalk2.default.green((0, _randomItem2.default)(successIntros));
  var repoName = _chalk2.default.yellow(success.full_name);
  var repoUrl = _chalk2.default.blue(success.html_url);
  var repoSsh = _chalk2.default.blue(success.ssh_url);

  console.log('\n');
  console.log('\t' + successIntro + ' ' + _chalk2.default.green('created:') + ' ' + repoName);
  console.log('\t' + _chalk2.default.green('Here\'s url:') + ' ' + repoUrl);
  console.log('\t' + _chalk2.default.green('Here\'s ssh:') + ' ' + repoSsh);
  console.log('\n');
};