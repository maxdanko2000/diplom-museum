const listItems = document.querySelectorAll(".tickets-form__droplist>li>input");

const btnIncreases = document.querySelectorAll(".counter-increase");
const btnDecreases = document.querySelectorAll(".counter-decrease");

const totalPrices = document.querySelectorAll(".total-price");

const basicTotalPrice = document.querySelector(".total-price-basic");
const seniorTotalPrice = document.querySelector(".total-price-senior");

const form = document.querySelector(".tickets-form");
const formOpenBtns = document.querySelectorAll(".open-form-btn");

let resultPrice = 0;
let isOpen = false;

function toggleForm() {
  for (const formOpenBtn of formOpenBtns) {
    formOpenBtn.addEventListener("click", () => {
      //console.log("clicked");
      if (isOpen) {
        form.style.transform = "scale(0)";
        isOpen = false;
      } else {
        form.style.transform = "scale(1)";
        isOpen = true;
      }
    });
  }
}

function increase() {
  for (const btnIncrease of btnIncreases) {
    btnIncrease.addEventListener("click", (e) => {
      const pricesBasic = document.querySelectorAll(".basic-price");
      const pricesSenior = document.querySelectorAll(".senior-price");

      e.path[1].children[1].value++;

      if (e.path[1].children[1].value < 0) {
        e.path[1].children[1].value = 0;
      }

      if (isOpen) {
        pricesBasic[0].value = pricesBasic[1].value;
        pricesSenior[0].value = pricesSenior[1].value;
      } else {
        pricesBasic[1].value = pricesBasic[0].value;
        pricesSenior[1].value = pricesSenior[0].value;
      }

      resultPrice = (+pricesBasic[0].value * 2 + +pricesSenior[0].value) * 10;

      for (const totalPrice of totalPrices) {
        totalPrice.innerHTML = `${resultPrice}`;
      }

      basicTotalPrice.innerHTML = `${+pricesBasic[0].value * 20}`;
      seniorTotalPrice.innerHTML = `${+pricesSenior[0].value * 10}`;
    });
  }
}

function decrease() {
  for (const btnDecrease of btnDecreases) {
    btnDecrease.addEventListener("click", (e) => {
      const pricesBasic = document.querySelectorAll(".basic-price");
      const pricesSenior = document.querySelectorAll(".senior-price");

      e.path[1].children[1].value--;

      if (e.path[1].children[1].value < 0) {
        e.path[1].children[1].value = 0;
      }
      if (isOpen) {
        pricesBasic[0].value = pricesBasic[1].value;
        pricesSenior[0].value = pricesSenior[1].value;
      } else {
        pricesBasic[1].value = pricesBasic[0].value;
        pricesSenior[1].value = pricesSenior[0].value;
      }

      resultPrice = (+pricesBasic[0].value * 2 + +pricesSenior[0].value) * 10;

      for (const totalPrice of totalPrices) {
        totalPrice.innerHTML = `${resultPrice}`;
      }

      basicTotalPrice.innerHTML = `${+pricesBasic[0].value * 20}`;
      seniorTotalPrice.innerHTML = `${+pricesSenior[0].value * 10}`;
    });
  }
}

function selectValue() {
  for (const listItem of listItems) {
    listItem.addEventListener("click", (e) => {
      e.path[3].childNodes[3].innerHTML = listItem.value;
    });
  }
}

// toggleForm();
// increase();
// decrease();
// selectValue();
