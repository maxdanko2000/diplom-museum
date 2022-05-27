import { dateList, priceList, timeList, usersList } from "./db";

export class Admin {
  constructor() {
    this.adminForm = document.getElementById("admin-form");
    this.adminDateList = document.getElementById("admin-date-list");
    this.adminTimeList = document.getElementById("admin-time-list");
    this.adminUserList = document.getElementById("admin-user-list");
    this.selectDateField = document.getElementById("select-date-field");
    this.selectTimeField = document.getElementById("select-time-field");
    this.btnAddDate = document.getElementById("btn-add-date");
    this.btnAddTime = document.getElementById("btn-add-time");
    this.btnRemoveList;
    this.btnDeleteUserList;
    this.arrDate = JSON.parse(localStorage.getItem(dateList));
    this.arrTime = JSON.parse(localStorage.getItem(timeList));
    this.arrPrice = JSON.parse(localStorage.getItem(priceList));
    this.arrUser = JSON.parse(localStorage.getItem(usersList));
    this.basicPriceInput = document.getElementById("admin-basic-price");
    this.seniorPriceInput = document.getElementById("admin-senior-price");
    this.btnUpdatePrice = document.getElementById("btn-update-price");
  }

  init() {
    this.adminForm.addEventListener("submit", (e) => {
      e.preventDefault();
    });
  }

  updateData() {
    for (const dateItem of this.arrDate) {
      this.adminDateList.innerHTML += this.itemWrap(dateItem);
    }
    for (const timeItem of this.arrTime) {
      this.adminTimeList.innerHTML += this.itemWrap(timeItem);
    }
    for (const userItem of this.arrUser) {
      if (!userItem.isAdmin) {
        this.adminUserList.innerHTML += this.userWrap(
          userItem.id,
          userItem.username,
          userItem.password,
          userItem.email,
          userItem.phone
        );
      }
    }
  }

  itemWrap(data) {
    return `
        <li class="admin-tickets__list-item">
          <input class="admin-tickets__data-value" type="text" value="${data}" />
          <span class="admin__btn-remove"></span>
        </li>`;
  }

  addDate() {
    this.btnAddDate.addEventListener("click", (e) => {
      if (this.selectDateField.value) {
        this.arrDate.push(this.selectDateField.value);
        localStorage.setItem(this.arrDate, JSON.stringify(this.arrDate));
        e.path[1].childNodes[3].innerHTML += this.itemWrap(this.selectDateField.value);
      }
    });
  }

  removeDate() {
    this.adminDateList.addEventListener("mouseover", () => {
      this.btnRemoveList = document.querySelectorAll(".admin__btn-remove");
      for (const btnRemove of this.btnRemoveList) {
        btnRemove.addEventListener("click", (e) => {
          const currentValue = e.target.parentNode.childNodes[1].value;
          e.target.parentNode.style.display = "none";
          const result = this.arrDate.filter((item) => !(item === currentValue));
          this.arrDate = result;
          localStorage.setItem(this.arrDate, JSON.stringify(this.arrDate));
        });
      }
    });
  }

  addTime() {
    this.btnAddTime.addEventListener("click", (e) => {
      if (this.selectTimeField.value) {
        this.arrTime.push(this.selectTimeField.value);
        localStorage.setItem(this.arrTime, JSON.stringify(this.arrTime));
        e.path[1].childNodes[3].innerHTML += this.itemWrap(this.selectTimeField.value);
      }
    });
  }

  removeTime() {
    this.adminTimeList.addEventListener("mouseover", () => {
      this.btnRemoveList = document.querySelectorAll(".admin__btn-remove");
      for (const btnRemove of this.btnRemoveList) {
        btnRemove.addEventListener("click", (e) => {
          const currentValue = e.target.parentNode.childNodes[1].value;
          e.target.parentNode.style.display = "none";
          const result = this.arrTime.filter((item) => !(item === currentValue));
          this.arrTime = result;
          localStorage.setItem(this.arrTime, JSON.stringify(this.arrTime));
        });
      }
    });
  }

  updatePrice() {
    this.btnUpdatePrice.addEventListener("click", () => {
      if (this.basicPriceInput.value && this.seniorPriceInput) {
        this.arrPrice.basic = this.basicPriceInput.value;
        this.arrPrice.senior = this.seniorPriceInput.value;
        localStorage.setItem(this.arrPrice, JSON.stringify(this.arrPrice));
      }
    });
  }

  removeUser() {
    this.btnDeleteUserList = document.querySelectorAll(".admin__data-btn");
    for (const btnDeleteUser of this.btnDeleteUserList) {
      btnDeleteUser.addEventListener("click", (e) => {
        e.path[1].style.display = "none";
        const result = this.arrUser.filter(
          (item) => !(+item.id === +e.path[1].childNodes[1].innerHTML)
        );
        this.arrUser = result;
        localStorage.setItem(this.arrUser, JSON.stringify(this.arrUser));
      });
    }
  }

  userWrap(id, username, password, email, phone) {
    return `
    <tr class="admin__table-row">
      <td class="admin__table-data">${id}</td>
      <td class="admin__table-data">${username}</td>
      <td class="admin__table-data">${password}</td>
      <td class="admin__table-data">${email}</td>
      <td class="admin__table-data">${phone}</td>
      <td class="admin__table-data admin__data-btn">
        <span class="admin__btn-remove"></span>
      </td>
    </tr>`;
  }
}
