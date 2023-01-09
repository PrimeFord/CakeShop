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
    img: "./media/cupcake3.jpeg",
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

//Selector
const dropIcon = document.querySelector(".dropIcon");
const drop = document.querySelector(".drop");
// const show = document.querySelector(".show");
const all = document.querySelector(".all");
const cake = document.querySelector(".cake");
const cupcake = document.querySelector(".cupcake");
const sweet = document.querySelector(".sweet");
const doughnut = document.querySelector(".doughnut");
const search = document.querySelector(".srt");

// for the drop down
const display = window.getComputedStyle(drop).display;
// if (display === "none") {
//   drop.style.display = "block";
// }
// if (!display == "none") {
//   drop.style.display = "none";
// }
let dis = ["block", "none"];
dropIcon.addEventListener("click", () => {
  let disR = dis.reverse();
  for (const d of disR) {
    drop.style.display = d;
  }
});

//for filter
all.addEventListener("click", () => {
  event.preventDefault();
  all.style.outline = "3px solid grey";
  cake.style.outline = "none";
  cupcake.style.outline = "none";
  sweet.style.outline = "none";
  doughnut.style.outline = "none";

  line.innerHTML = "";
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
});
//
cake.addEventListener("click", () => {
  event.preventDefault();
  cake.style.outline = "3px solid grey";
  all.style.outline = "none";
  cupcake.style.outline = "none";
  sweet.style.outline = "none";
  doughnut.style.outline = "none";

  line.innerHTML = "";

  const cakes = cakesInfo.filter((cake) => cake.category === "cake");

  for (let i = 0; i < cakes.length; i++) {
    line.innerHTML += `<div class="post">
    <div class="pimage">
      <img src=${cakes[i].img} />
      <p class="mcart">
        <img src=${cakes[i].cart} alt="" />
      </p>
    </div>
    <div class="pp">${cakes[i].name} <span>${cakes[i].price}</span></div>
  </div>`;
  }
});
// cupcake filter
cupcake.addEventListener("click", () => {
  event.preventDefault();
  cupcake.style.outline = "3px solid grey";
  all.style.outline = "none";
  cake.style.outline = "none";
  sweet.style.outline = "none";
  doughnut.style.outline = "none";

  line.innerHTML = "";

  const cupcakes = cakesInfo.filter(
    (cupcake) => cupcake.category === "cupcake"
  );

  for (let i = 0; i < cupcakes.length; i++) {
    line.innerHTML += `<div class="post">
    <div class="pimage">
      <img src=${cupcakes[i].img} />
      <p class="mcart">
        <img src=${cupcakes[i].cart} alt="" />
      </p>
    </div>
    <div class="pp">${cupcakes[i].name} <span>${cupcakes[i].price}</span></div>
  </div>`;
  }
});
//sweet filter
sweet.addEventListener("click", () => {
  event.preventDefault();
  sweet.style.outline = "3px solid grey";
  all.style.outline = "none";
  cake.style.outline = "none";
  cupcake.style.outline = "none";
  doughnut.style.outline = "none";

  line.innerHTML = "";

  const sweets = cakesInfo.filter((sweet) => sweet.category === "sweet");

  for (let i = 0; i < sweets.length; i++) {
    line.innerHTML += `<div class="post">
    <div class="pimage">
      <img src=${sweets[i].img} />
      <p class="mcart">
        <img src=${sweets[i].cart} alt="" />
      </p>
    </div>
    <div class="pp">${sweets[i].name} <span>${sweets[i].price}</span></div>
  </div>`;
  }
});
//doughnut filter
doughnut.addEventListener("click", () => {
  event.preventDefault();
  doughnut.style.outline = "3px solid grey";
  all.style.outline = "none";
  cake.style.outline = "none";
  cupcake.style.outline = "none";
  sweet.style.outline = "none";

  line.innerHTML = "";

  const doughnuts = cakesInfo.filter(
    (doughnut) => doughnut.category === "doughnut"
  );

  for (let i = 0; i < doughnuts.length; i++) {
    line.innerHTML += `<div class="post">
    <div class="pimage">
      <img src=${doughnuts[i].img} />
      <p class="mcart">
        <img src=${doughnuts[i].cart} alt="" />
      </p>
    </div>
    <div class="pp">${doughnuts[i].name} <span>${doughnuts[i].price}</span></div>
  </div>`;
  }
});
//for search
search.addEventListener("input", () => {
  event.preventDefault();
  doughnut.style.outline = "none";
  all.style.outline = "none";
  cake.style.outline = "none";
  cupcake.style.outline = "none";
  sweet.style.outline = "none";

  line.innerHTML = "";

  const filter = cakesInfo.filter((filt) =>
    filt.category.includes(search.value.toLowerCase())
  );
  console.log(filter);
  search.value;

  for (let i = 0; i < filter.length; i++) {
    line.innerHTML += `<div class="post">
    <div class="pimage">
      <img src=${filter[i].img} />
      <p class="mcart">
        <img src=${filter[i].cart} alt="" />
      </p>
    </div>
    <div class="pp">${filter[i].name} <span>${filter[i].price}</span></div>
  </div>`;
  }
});
