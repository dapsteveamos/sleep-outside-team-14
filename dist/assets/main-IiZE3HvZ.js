import{r as n,a as d,l as p}from"./utils-NAb9tBbk.js";import{P as y,a as g}from"./ProductDetails-Dtg69m2X.js";function o(t){return`<li class="product-card">
  <a href="/product_pages/index.html?product=${t.Id}">
  <img
    src="${t.Images.PrimaryMedium}"
    alt="Image of ${t.Name}"
  />
  <h3 class="card__brand">${t.Brand.Name}</h3>
  <h2 class="card__name">${t.Name}</h2>
  <p class="product-card__price">$${t.FinalPrice}</p></a>
  <button class="quick-view" data-id="${t.Id}">Quick View</button>
</li>`}class w{constructor(e,s,a){this.category=e,this.dataSource=s,this.listElement=a}async init(){const e=await this.dataSource.getData(this.category);this.renderList(e),this.addQuickViewListeners(),document.querySelector(".title").innerHTML=this.category}renderList(e){n(o,this.listElement,e)}renderResults(e){this.listElement.innerHTML="",e.length>0?n(o,this.listElement,e):this.listElement.innerHTML="<li>No results found.</li>"}async showQuickView(e){const s=new y(e,this.dataSource);await s.init();const a=s.renderProductDetails(),i=document.getElementById("product-details");i.querySelector(".product-detail-content").innerHTML=a,i.showModal(),document.getElementById("closeModal").addEventListener("click",()=>{i.close()}),i.addEventListener("click",h=>{h.target===i&&i.close()})}addQuickViewListeners(){this.listElement.querySelectorAll(".quick-view").forEach(s=>{s.addEventListener("click",a=>{const i=a.target.getAttribute("data-id");this.showQuickView(i)})})}}const c=d("category"),r=d("search"),L=document.querySelector(".product-list"),u=document.querySelector("#category");u.textContent=c.toUpperCase();u.textContent=r?"SEARCH RESULTS":c?c.toUpperCase():"TOP PRODUCTS";const m=new g("tents"),l=new w("tents",m,L);r?m.getData(r).then(t=>{console.log("Search Results:",t),l.renderResults(t)}).catch(t=>console.error(t)):c&&l.init();p();document.addEventListener("DOMContentLoaded",function(){const t=document.querySelector(".alert");t&&(t.style.display="block",setTimeout(()=>{t.style.display="none"},5e3))});
