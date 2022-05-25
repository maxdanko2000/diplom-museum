import { dateList, timeList } from "./db";
import { removeFromTable } from "./utils";

export class Admin {
  constructor() {
    this.adminForm = document.getElementById("admin-form");
    this.adminDateList = document.getElementById("admin-date-list");
    this.adminTimeList = document.getElementById("admin-time-list");
    this.selectDateField = document.getElementById("select-date-field");
    this.selectTimeField = document.getElementById("select-time-field");
    this.btnAddDate = document.getElementById("btn-add-date");
    this.btnAddTime = document.getElementById("btn-add-time");
  }

  updateData() {
    this.adminForm?.addEventListener("submit", (e) => {
      e.preventDefault();
    });
  }

  loadData() {
    for (const dateItem of dateList) {
      this.adminDateList.innerHTML += this.itemWrap(dateItem);
    }
    for (const timeItem of timeList) {
      this.adminTimeList.innerHTML += this.itemWrap(timeItem);
    }
  }

  addDate() {
    this.btnAddDate?.addEventListener("click", () => {
      if (this.selectDateField.value) {
        console.log(this.selectDateField.value);
        dateList.push(this.selectDateField.value);
        this.adminDateList.innerHTML += this.itemWrap(this.selectDateField.value);
      }
    });
  }

  addTime() {
    this.btnAddTime?.addEventListener("click", () => {
      if (this.selectTimeField.value) {
        console.log(this.selectTimeField.value);
        timeList.push(this.selectTimeField.value);
        this.adminTimeList.innerHTML += this.itemWrap(this.selectTimeField.value);
      }
    });
  }

  itemWrap(data) {
    return `
        <li class="admin-tickets__list-item">
          <input class="admin-tickets__data-value" type="text" value="${data}" />
          <span class="admin__btn-remove"></span>
        </li>`;
  }

  updatePrice() {}

  removeUser() {}
}
