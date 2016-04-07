'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.errorHandler = undefined;

var _chalk = require('chalk');

var _chalk2 = _interopRequireDefault(_chalk);

var _randomItem = require('random-item');

var _randomItem2 = _interopRequireDefault(_randomItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var errorMessages = {
  '400': 'you need to provide name for the repo!',
  '401': 'provided token is invalid!',
  '422': 'repo with that name already exists or no token was provided!'
};

var errorIntros = ['Damn :(', 'Oops :(', 'Sorry, but'];

var errorHandler = exports.errorHandler = function errorHandler(error) {
  var errorIntro = _chalk2.default.red((0, _randomItem2.default)(errorIntros));
  var errorMessage = _chalk2.default.red(errorMessages[error.code]);

  console.log('\n');
  console.error('\t' + errorIntro + ' ' + errorMessage);
  console.log('\n');
};