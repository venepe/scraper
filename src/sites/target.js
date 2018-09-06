import { stripAndTrim, lookupFailure, getText, getSrc } from "../helpers";

export const name = "target";
export const hosts = ["www.target.com"];
export const scrape = async page => {
  const title = await getText('[data-test="product-title"]', page);
  const price = await getText('[data-test="product-price"]', page);
  const image = await getSrc('[data-test="goToSlide"] > img', page);
  const description = await getText(
    "#tab-content-details > div:nth-child(2)",
    page
  );

  const data = {
    title,
    price,
    image,
    description
  };

  return data;
};
