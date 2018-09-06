"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.scrape = exports.hosts = exports.name = undefined;

var _helpers = require("../helpers");

const name = exports.name = "walmart";
const hosts = exports.hosts = ["www.walmart.com"];
const scrape = exports.scrape = async page => {
  const title = await (0, _helpers.getText)(".prod-ProductTitle", page);
  const price = await (0, _helpers.getText)(".Price .Price-group", page);
  const image = await (0, _helpers.getSrc)(".slider .slider-list img", page);
  const description = await (0, _helpers.getText)(".about-desc", page);

  const data = {
    title,
    price,
    image,
    description
  };

  return data;
};