"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.scrape = exports.hosts = exports.name = undefined;

var _helpers = require("../helpers");

const name = exports.name = "bestbuy";
const hosts = exports.hosts = ["www.bestbuy.com"];
const scrape = exports.scrape = async page => {
  const title = await (0, _helpers.getText)("#sku-title h1", page);
  const price = await (0, _helpers.getText)(".pb-hero-price.pb-purchase-price", page);
  const image = await (0, _helpers.getSrc)(".primary-image", page, true);
  const description = await (0, _helpers.getText)("#long-description", page);

  const data = {
    title,
    price,
    image,
    description
  };

  return data;
};