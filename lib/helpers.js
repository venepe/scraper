"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getSrc = exports.getText = exports.lookupFailure = exports.stripAndTrim = undefined;

var _striptags = require("striptags");

var _striptags2 = _interopRequireDefault(_striptags);

var _bluebird = require("bluebird");

var _bluebird2 = _interopRequireDefault(_bluebird);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const stripAndTrim = exports.stripAndTrim = val => {
  return (0, _striptags2.default)(val).trim();
};

const lookupFailure = exports.lookupFailure = () => {
  return null;
};

const getText = exports.getText = async (selector, page) => {
  const data = await page.$eval(selector, e => e.innerHTML).catch(lookupFailure);

  return stripAndTrim(data);
};

const getSrc = exports.getSrc = async (selector, page, wait = false) => {
  if (wait) {
    await page.waitForSelector(selector, { visible: true, timeout: 7500 }).catch(lookupFailure);
  }
  return await page.$eval(selector, e => e.src).catch(lookupFailure);
};