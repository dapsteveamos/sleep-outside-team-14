import { setLocalStorage, getLocalStorage, alertMessage, removeAllAlerts } from "./utils.mjs";

function productDetailsTemplate(product) {
  const discountPercentage = ((product.SuggestedRetailPrice - product.FinalPrice) / product.SuggestedRetailPrice) * 100;
  const discountMarkup = discountPercentage > 0
  ? `<span class= "discount-badge">-${Math.round(discountPercentage)}%</span>`
  : '';

  return `<section class="product-detail"> <h3>${product.Brand.Name}</h3>
    <h2 class="divider">${product.NameWithoutBrand}</h2>
    <img
      class="divider"
      src="${product.Images.PrimaryLarge}"
      alt="${product.NameWithoutBrand}"
    />
    <p class="product-card__price">$${product.FinalPrice} ${discountMarkup}
    </p>
    <p class="product__color">${product.Colors[0].ColorName}</p>
    <p class="product__description">
    ${product.DescriptionHtmlSimple}
    </p>
    <div class="product-detail__add">
      <button id="addToCart" data-id="${product.Id}">Add to Cart</button>
      <input type="number" name="quantity" id="quantity" placeholder="Quantity">
    </div></section>`;
}

export default class ProductDetails {
  constructor(productId, dataSource) {
    this.productId = productId;
    this.product = {};
    this.dataSource = dataSource;
  }
  async init() {
    // use our datasource to get the details for the current product. findProductById will return a promise! use await or .then() to process it
    this.product = await this.dataSource.findProductById(this.productId);
    // once we have the product details we can render out the HTML
    this.renderProductDetails("main");
    // once the HTML is rendered we can add a listener to Add to Cart button
    // Notice the .bind(this). Our callback will not work if we don't include that line. Review the readings from this week on 'this' to understand why.
    const quantityField = document.getElementById("quantity")
    let quantity = quantityField.value
    this.product.quantity = parseInt(quantity)
    document
      .getElementById("addToCart")
      .addEventListener("click", this.addToCart.bind(this));
  }
  addToCart() {
    let cartContents = getLocalStorage("so-cart");
    //check to see if there was anything there
    if (!cartContents) {
      cartContents = [];
    }
    // then add the current product to the list
    cartContents.push(this.product);
    setLocalStorage("so-cart", cartContents);

    // Call the function to animate cart icon
    this.animateCartIcon();
    
    // Call the function to display alert message
    alertMessage("Cart updated");
    
    
    // Call the function to remove alerts
    setTimeout(removeAllAlerts, 5000);
  }

  // Function to animate the cart icon
  animateCartIcon() {
    const cartIcon = document.querySelector('.cart svg');
    if (cartIcon) {
      cartIcon.classList.add('cart-icon-animate');
  
      // Remove the class after the animation ends to allow it to be re-triggered later
      cartIcon.addEventListener('animationed', () => {
        cartIcon.classList.remove('cart-icon-animate');
      }, {once: true});
    }main
  }


  renderProductDetails(selector) {
    const element = document.querySelector(selector);
    element.insertAdjacentHTML(
      "afterBegin",
      productDetailsTemplate(this.product)
    );
  }
}
