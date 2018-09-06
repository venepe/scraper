"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.scrape = exports.detectSite = exports.scrapeAndDetect = undefined;

var _helpers = require("./helpers");

Object.keys(_helpers).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _helpers[key];
    }
  });
});

var _scraper = require("./scraper");

Object.defineProperty(exports, "scrapeAndDetect", {
  enumerable: true,
  get: function () {
    return _interopRequireDefault(_scraper).default;
  }
});
Object.defineProperty(exports, "detectSite", {
  enumerable: true,
  get: function () {
    return _scraper.detectSite;
  }
});
Object.defineProperty(exports, "scrape", {
  enumerable: true,
  get: function () {
    return _scraper.scrape;
  }
});

var _scraper2 = _interopRequireDefault(_scraper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _scraper2.default;