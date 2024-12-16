let cartArea = document.getElementById("cart-btn");
let openCartArea = document.getElementById("cart-area");

let backBtn = document.getElementById("backB");

backBtn.style.cursor = "pointer";

function openCart() {
  console.log("working open cart");
  openCartArea.style.display = "block";
  openCartArea.style.transition = "0.9s";
}
function closeCart() {
  console.log("working close cart");
  openCartArea.style.display = "none";
  openCartArea.style.transition = "0.9s";
}

cartArea.addEventListener("click", openCart);

backBtn.addEventListener("click", closeCart);

//new work..

const addBtn = document.getElementById("cart-btn");


function addToCart() {
  console.log("working");
  const list = document.getElementById("product-cart");
  const newtask = document.createElement("li");
  newtask.textContent = "warm coat";
  list.appendChild(newtask);
  dltBtn(newtask,list);
}

function dltBtn(newtask,list) {
  const btn = document.createElement("button");
  newtask.appendChild(btn);
  btn.textContent = "DEl";
 btn.onclick = () =>{
  newtask.remove()
 }
}


//cart work..
