export class Form {
  constructor() {
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
  }
}
