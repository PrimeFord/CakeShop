cakesInfo = [
  {
    img: "./media/sweet1.jpeg",
    name: "Sweet item",
    price: "$ 5",
    category: "sweet",
    cart: "./media/shopping-cart-2-fill.png",
  },
  {
    img: "./media/cupcake1.jpeg",
    name: "Cupcake item",
    price: "$ 5",
    category: "cupcake",
    cart: "./media/shopping-cart-2-fill.png",
  },
  {
    img: "./media/cake1.jpeg",
    name: "Cake item",
    price: "$ 5",
    category: "cake",
    cart: "./media/shopping-cart-2-fill.png",
  },
  {
    img: "./media/doughnut1.jpeg",
    name: "Doughnut item",
    price: "$ 5",
    category: "doughnut",
    cart: "./media/shopping-cart-2-fill.png",
  },
  {
    img: "./media/sweet2.jpeg",
    name: "Sweet item",
    price: "$ 10",
    category: "sweet",
    cart: "./media/shopping-cart-2-fill.png",
  },
  {
    img: "./media/cupcake2.jpeg",
    name: "Cupcake item",
    price: "$ 10",
    category: "cupcake",
    cart: "./media/shopping-cart-2-fill.png",
  },
  {
    img: "./media/cake2.jpeg",
    name: "Cake item",
    price: "$ 10",
    category: "cake",
    cart: "./media/shopping-cart-2-fill.png",
  },
  {
    img: "./media/doughnut2.jpeg",
    name: "Doughnut item",
    price: "$ 10",
    category: "doughnut",
    cart: "./media/shopping-cart-2-fill.png",
  },
  {
    img: "./media/sweet3.jpeg",
    name: "Sweet item",
    price: "$ 15",
    category: "sweet",
    cart: "./media/shopping-cart-2-fill.png",
  },
  {
    img: "./media/cupctake3.jpeg",
    name: "Cupcake item",
    price: "$ 15",
    category: "cupcake",
    cart: "./media/shopping-cart-2-fill.png",
  },
  {
    img: "./media/cake3.jpeg",
    name: "Cake item",
    price: "$ 15",
    category: "cake",
    cart: "./media/shopping-cart-2-fill.png",
  },
  {
    img: "./media/doughnut3.jpeg",
    name: "Doughnut item",
    price: "$ 15",
    category: "doughnut",
    cart: "./media/shopping-cart-2-fill.png",
  },
];

const line = document.querySelector(".line1");
for (let i = 0; i < cakesInfo.length; i++) {
  line.innerHTML += `<div class="post">
  <div class="pimage">
    <img src=${cakesInfo[i].img} />
    <p class="mcart">
      <img src=${cakesInfo[i].cart} alt="" />
    </p>
  </div>
  <div class="pp">${cakesInfo[i].name} <span>${cakesInfo[i].price}</span></div>
</div>`;
}
