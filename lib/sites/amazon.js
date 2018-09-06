"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.scrape = exports.hosts = exports.name = undefined;

var _helpers = require("../helpers");

const name = exports.name = "amazon";
const hosts = exports.hosts = ["www.amazon.com", "smile.amazon.com"];
const scrape = exports.scrape = async page => {
  const title = await (0, _helpers.getText)("#title", page);
  const price = await (0, _helpers.getText)("#priceblock_ourprice", page);
  const image = await (0, _helpers.getSrc)("img.a-dynamic-image", page);
  const description = await (0, _helpers.getText)("#featurebullets_feature_div", page);

  const data = {
    title,
    price,
    image,
    description
  };

  return data;
};