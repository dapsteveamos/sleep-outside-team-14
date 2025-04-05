import{g as i,s as c,b as o,c as d}from"./utils-NAb9tBbk.js";const s="http://server-nodejs.cit.byui.edu:3000/";function n(a){if(a.ok)return a.json();throw new Error("Bad Response")}class p{constructor(t){}async getData(t){const e=await fetch(s+`products/search/${t}`);return(await n(e)).Result}async findProductById(t){const e=await fetch(s+`product/${t}`);return(await n(e)).Result}async getData(t){const e=await fetch(s+`products/search/${t}`);return(await n(e)).Result}}function u(a){const t=(a.SuggestedRetailPrice-a.FinalPrice)/a.SuggestedRetailPrice*100,e=t>0?`<span class= "discount-badge">-${Math.round(t)}%</span>`:"";return`<section class="product-detail"> <h3>${a.Brand.Name}</h3>
    <h2 class="divider">${a.NameWithoutBrand}</h2>
    <img
      class="divider"
      src="${a.Images.PrimaryLarge}"
      alt="${a.NameWithoutBrand}"
    />
    <p class="product-card__price">$${a.FinalPrice} ${e}
    </p>
    <p class="product__color">${a.Colors[0].ColorName}</p>
    <p class="product__description">
    ${a.DescriptionHtmlSimple}
    </p>
    <div class="product-detail__add">
      <button id="addToCart" data-id="${a.Id}">Add to Cart</button>
      <input type="number" name="quantity" id="quantity" placeholder="Quantity">
    </div></section>`}class m{constructor(t,e){this.productId=t,this.product={},this.dataSource=e}async init(){this.product=await this.dataSource.findProductById(this.productId),this.renderProductDetails("main");let e=document.getElementById("quantity").value;this.product.quantity=parseInt(e),document.getElementById("addToCart").addEventListener("click",this.addToCart.bind(this))}addToCart(){let t=i("so-cart");t||(t=[]),t.push(this.product),c("so-cart",t),this.animateCartIcon(),o("Cart updated"),setTimeout(d,5e3)}animateCartIcon(){const t=document.querySelector(".cart svg");t&&(t.classList.add("cart-icon-animate"),t.addEventListener("animationed",()=>{t.classList.remove("cart-icon-animate")},{once:!0})),main}renderProductDetails(t){document.querySelector(t).insertAdjacentHTML("afterBegin",u(this.product))}}export{m as P,p as a};
