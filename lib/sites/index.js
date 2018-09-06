"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.scrape = undefined;

var _helpers = require("../helpers");

var _amazon = require("./amazon");

var amazon = _interopRequireWildcard(_amazon);

var _bestbuy = require("./bestbuy");

var bestbuy = _interopRequireWildcard(_bestbuy);

var _target = require("./target");

var target = _interopRequireWildcard(_target);

var _walmart = require("./walmart");

var walmart = _interopRequireWildcard(_walmart);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

const scrape = exports.scrape = async page => {
  let data = {
    title: null,
    original_price: null,
    sale_price: null,
    price: null,
    image: null,
    brand: null,
    details: null,
    description: null
  };

  const title = (0, _helpers.stripAndTrim)((await page.$eval("#title", e => e.innerHTML)));
  data.title = title;

  return data;
};

exports.default = {
  amazon,
  bestbuy,
  target,
  walmart
};