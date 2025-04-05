import { getParam, loadHeaderFooter } from "./utils.mjs";
import ProductData from "./ProductData.mjs";
import ProductDetails from "./ProductDetails.mjs";


const dataSource = new ProductData("tents");
const productId = getParam("product");

const product = new ProductDetails(productId, dataSource);
product.init();

// function addProductToCart(product) {
//   const cartItems = getLocalStorage("so-cart") || []; // get cart array of items from local storage if null set to empty array
//   cartItems.push(product);
//   setLocalStorage("so-cart", cartItems);
// }
// // add to cart button event handler
// async function addToCartHandler(e) {
//   const product = await dataSource.findProductById(e.target.dataset.id);
//   addProductToCart(product);
// }

// // add listener to Add to Cart button
// document
//   .getElementById("addToCart")
//   .addEventListener("click", addToCartHandler);


const images = document.querySelectorAll(".product-detail");
let currentIndex = 0;

function showImage(index) {
   images.forEach((img, i) => {
      if (i === index) {
         img.setAttribute("active", "");
      } else {
         img.removeAttribute("active");
      }
   });
}

document.querySelector(".arrow-right").addEventListener("click", () => {
   currentIndex = (currentIndex + 1) % images.length;
   showImage(currentIndex);
});

document.querySelector(".arrow-left").addEventListener("click", () => {
   currentIndex = (currentIndex - 1 + images.length) % images.length;
   showImage(currentIndex);
});

showImage(currentIndex);  


    