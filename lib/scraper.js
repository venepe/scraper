"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.detectSite = exports.scrape = undefined;

var _puppeteer = require("puppeteer");

var _puppeteer2 = _interopRequireDefault(_puppeteer);

var _urlParse = require("url-parse");

var _urlParse2 = _interopRequireDefault(_urlParse);

var _lodash = require("lodash");

var _sites = require("./sites");

var _sites2 = _interopRequireDefault(_sites);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const scrape = exports.scrape = async (url, site) => {
  const browser = await _puppeteer2.default.launch({ args: ['--no-sandbox', '--disable-setuid-sandbox'] });
  const page = await browser.newPage();

  await page.goto(url, { waitUntil: "networkidle2", timeout: 60000 });

  let data;
  if (!site) {
    data = await (0, _sites.scrape)(page);
  } else {
    data = await site.scrape(page);
  }
  await browser.close();
  return data;
};

const detectSite = exports.detectSite = async url => {
  url = new _urlParse2.default(url);
  const sitesArr = (0, _lodash.map)(_sites2.default, site => {
    return site;
  });

  let site;
  for (let i = 0; i < sitesArr.length; i++) {
    if ((0, _lodash.includes)(sitesArr[i].hosts, url.host)) {
      site = sitesArr[i];
    }
  }

  return site;
};

exports.default = async url => {
  const site = await detectSite(url);
  return site ? await scrape(url, site) : await scrape(url);
};