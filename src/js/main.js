import { getParam } from "./utils.mjs";
import ProductData from "./ProductData.mjs";
import ProductList from "./ProductList.mjs";
import { loadHeaderFooter } from "./utils.mjs";

const category = getParam("category");
const element = document.querySelector(".product-list");
const title = document.querySelector("#category");
title.textContent = category.toUpperCase();

const product = new ProductData("tents");
const productList = new ProductList("tents", product, element);
productList.init();

loadHeaderFooter();

document.addEventListener("DOMContentLoaded", function () {
  const alertBox = document.querySelector(".alert");

  if (alertBox) {
    alertBox.style.display = "block"; // Show the alert
    setTimeout(() => {
      alertBox.style.display = "none"; // Hide after 5 seconds
    }, 5000);
  }
});
