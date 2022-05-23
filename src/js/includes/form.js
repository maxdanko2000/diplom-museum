export class Form {
  constructor() {
    this.listItems = document.querySelectorAll(".tickets-form__droplist>li>input");
    this.droplistFieldList = document.querySelectorAll(".field-text");
    this.btnIncreases = document.querySelectorAll(".counter-increase");
    this.btnDecreases = document.querySelectorAll(".counter-decrease");
    this.totalPrices = document.querySelectorAll(".total-price");
    this.basicTotalPrice = document.querySelector(".total-price-basic");
    this.seniorTotalPrice = document.querySelector(".total-price-senior");
    this.form = document.querySelector(".tickets-form");
    this.formOpenBtn = document.getElementById("tickets-form-toggler");
    this.ticketTypeList = document.querySelectorAll(".tickets-type__bar");
    this.ticketTypeTexts = document.querySelectorAll(".tickets-type-text");
    this.totalAgeCounters = document.querySelectorAll(".overview-age__count");
    this.overviewTextList = document.querySelectorAll(".overview__row-text");
    this.resultPrice = 0;
  }

  increase() {
    for (const btnIncrease of this.btnIncreases) {
      btnIncrease.addEventListener("click", (e) => {
        const pricesBasic = document.querySelectorAll(".basic-price");
        const pricesSenior = document.querySelectorAll(".senior-price");
        e.path[1].children[1].value++;

        if (e.path[1].children[1].value < 0) {
          e.path[1].children[1].value = 0;
        }

        if (this.formOpenBtn.checked) {
          pricesBasic[0].value = pricesBasic[1].value;
          pricesSenior[0].value = pricesSenior[1].value;
          this.totalAgeCounters[0].innerHTML = pricesBasic[1].value;
          this.totalAgeCounters[1].innerHTML = pricesSenior[1].value;
        } else {
          pricesBasic[1].value = pricesBasic[0].value;
          pricesSenior[1].value = pricesSenior[0].value;
          this.totalAgeCounters[0].innerHTML = pricesBasic[0].value;
          this.totalAgeCounters[1].innerHTML = pricesSenior[0].value;
        }

        this.resultPrice = (+pricesBasic[0].value * 2 + +pricesSenior[0].value) * 10;

        for (const totalPrice of this.totalPrices) {
          totalPrice.innerHTML = `${this.resultPrice}`;
        }

        this.basicTotalPrice.innerHTML = `${+pricesBasic[0].value * 20}`;
        this.seniorTotalPrice.innerHTML = `${+pricesSenior[0].value * 10}`;
      });
    }
  }
  decrease() {
    for (const btnDecrease of this.btnDecreases) {
      btnDecrease.addEventListener("click", (e) => {
        const pricesBasic = document.querySelectorAll(".basic-price");
        const pricesSenior = document.querySelectorAll(".senior-price");

        e.path[1].children[1].value--;

        if (e.path[1].children[1].value < 0) {
          e.path[1].children[1].value = 0;
        }

        if (this.formOpenBtn.checked) {
          pricesBasic[0].value = pricesBasic[1].value;
          pricesSenior[0].value = pricesSenior[1].value;
          this.totalAgeCounters[0].innerHTML = pricesBasic[1].value;
          this.totalAgeCounters[1].innerHTML = pricesSenior[1].value;
        } else {
          pricesBasic[1].value = pricesBasic[0].value;
          pricesSenior[1].value = pricesSenior[0].value;
          this.totalAgeCounters[0].innerHTML = pricesBasic[0].value;
          this.totalAgeCounters[1].innerHTML = pricesSenior[0].value;
        }

        this.resultPrice = (+pricesBasic[0].value * 2 + +pricesSenior[0].value) * 10;

        for (const totalPrice of this.totalPrices) {
          totalPrice.innerHTML = `${this.resultPrice}`;
        }

        this.basicTotalPrice.innerHTML = `${+pricesBasic[0].value * 20}`;
        this.seniorTotalPrice.innerHTML = `${+pricesSenior[0].value * 10}`;
      });
    }
  }
  selectValue() {
    for (const ticketTypeItem of this.ticketTypeList) {
      ticketTypeItem.addEventListener("click", (e) => {
        for (const ticketTypeText of this.ticketTypeTexts) {
          ticketTypeText.innerHTML = e.path[1].childNodes[3].innerHTML;
        }
      });
    }

    for (const listItem of this.listItems) {
      listItem.addEventListener("click", (e) => {
        e.path[3].childNodes[3].innerHTML = e.target.value;
        this.overviewTextList[0].innerHTML = this.droplistFieldList[0].innerHTML;
        this.overviewTextList[1].innerHTML = this.droplistFieldList[1].innerHTML;
        this.overviewTextList[2].innerHTML = this.droplistFieldList[2].innerHTML;
      });
    }
  }
}
