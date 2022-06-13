import { dateList, priceList, timeList } from "./db";

export class Form {
  constructor() {
    this.listItems = document.querySelectorAll(".tickets-form__droplist-field");

    this.droplistFieldList = document.querySelectorAll(".field-text");

    this.btnIncreases = document.querySelectorAll(".counter-increase");
    this.btnDecreases = document.querySelectorAll(".counter-decrease");

    this.totalPrices = document.querySelectorAll(".total-price");

    this.basicTotalPrice = document.querySelector(".total-price-basic");
    this.seniorTotalPrice = document.querySelector(".total-price-senior");

    this.form = document.querySelector(".tickets-form");

    this.formCloseBtn = document.getElementById("close-form-btn");
    this.formOpenBtn = document.getElementById("open-form-btn");
    this.formOpenToggler = document.getElementById("tickets-form-toggler");

    this.ticketTypeList = document.querySelectorAll(".tickets-type__bar");
    this.ticketTypeTexts = document.querySelectorAll(".tickets-type-text");

    this.totalAgeCounters = document.querySelectorAll(".overview-age__count");

    this.overviewTextList = document.querySelectorAll(".overview__row-text");

    this.resultPrice = 0;

    this.priceBasicText = document.querySelectorAll(".price-basic");
    this.priceSeniorText = document.querySelectorAll(".price-senior");

    this.auth = JSON.parse(localStorage.getItem("auth"));
    this.localPrice = JSON.parse(localStorage.getItem("priceList"));
    this.localDateList = JSON.parse(localStorage.getItem("dateList"));
    this.localTimeList = JSON.parse(localStorage.getItem("timeList"));

    this.dropListDate = document.getElementById("form-droplist-date");
    this.dropListTime = document.getElementById("form-droplist-time");
  }

  init() {
    if (!this.auth) {
      this.auth = { isAdmin: false, isAuth: false, login: "" };
      localStorage.setItem("auth", JSON.stringify(this.auth));
    }

    if (!this.localDateList && !this.localTimeList && !this.localPrice) {
      localStorage.setItem("dateList", JSON.stringify(dateList));
      localStorage.setItem("timeList", JSON.stringify(timeList));
      localStorage.setItem("priceList", JSON.stringify(priceList));
    }
  }

  buyTicket() {
    this.form.addEventListener("submit", (e) => {
      e.preventDefault();

      alert("Ticket purchased successfully!");
    });
  }

  toggleForm() {
    this.formCloseBtn.addEventListener("click", () => {
      this.form.classList.remove("tickets-form__visible");
    });

    this.formOpenBtn.addEventListener("click", () => {
      if (this.auth.isAdmin === false && this.auth.isAuth === false) {
        alert("Please authorize!");
        document.location.pathname = "/login-page.html";
      } else {
        this.form.classList.add("tickets-form__visible");

        for (const date of this.localDateList) {
          this.dropListDate.innerHTML += this.dateWrap(date);
        }

        for (const time of this.localTimeList) {
          this.dropListTime.innerHTML += this.dateWrap(time);
        }

        for (const basicPriceText of this.priceBasicText) {
          basicPriceText.innerHTML = this.localPrice.basic;
        }
        for (const seniorPriceText of this.priceSeniorText) {
          seniorPriceText.innerHTML = this.localPrice.senior;
        }
      }
    });
  }

  updateDataFields(e) {
    const pricesBasic = document.querySelectorAll(".basic-price");
    const pricesSenior = document.querySelectorAll(".senior-price");

    if (e.path[1].children[1].value < 0) {
      e.path[1].children[1].value = 0;
    }

    if (this.formOpenToggler.checked) {
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

    this.resultPrice =
      +pricesBasic[0].value * +this.localPrice.basic +
      +pricesSenior[0].value * +this.localPrice.senior;

    for (const totalPrice of this.totalPrices) {
      totalPrice.innerHTML = `${this.resultPrice}`;
    }

    this.basicTotalPrice.innerHTML = `${+pricesBasic[0].value * +this.localPrice.basic}`;
    this.seniorTotalPrice.innerHTML = `${+pricesSenior[0].value * +this.localPrice.senior}`;
  }

  dateWrap(data) {
    return `
    <li class="tickets-form__droplist-item">
      <input
      class="tickets-form__droplist-field"
      type="text"
      readonly
      value="${data}"
      />
      </li>
      `;
  }

  increase() {
    for (const btnIncrease of this.btnIncreases) {
      btnIncrease.addEventListener("click", (e) => {
        e.path[1].children[1].value++;
        this.updateDataFields(e);
      });
    }
  }

  decrease() {
    for (const btnDecrease of this.btnDecreases) {
      btnDecrease.addEventListener("click", (e) => {
        e.path[1].children[1].value--;
        this.updateDataFields(e);
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
        console.log("1");
        e.path[3].childNodes[3].innerHTML = e.target.value;
        this.overviewTextList[0].innerHTML = this.droplistFieldList[0].innerHTML;
        this.overviewTextList[1].innerHTML = this.droplistFieldList[1].innerHTML;
        this.overviewTextList[2].innerHTML = this.droplistFieldList[2].innerHTML;
      });
    }
  }
}
