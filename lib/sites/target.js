"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.scrape = exports.hosts = exports.name = undefined;

var _helpers = require("../helpers");

const name = exports.name = "target";
const hosts = exports.hosts = ["www.target.com"];
const scrape = exports.scrape = async page => {
  const title = await (0, _helpers.getText)(".title-product", page);
  const price = await (0, _helpers.getText)(".price .h-text-lowercase", page);
  const image = await (0, _helpers.getSrc)("img.single-image", page);
  const description = await (0, _helpers.getText)("#tab-content-details > div:nth-child(2)", page);

  const data = {
    title,
    price,
    image,
    description
  };

  return data;
};