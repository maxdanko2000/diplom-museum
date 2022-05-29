import { ticketsList } from "./db";
import { Login } from "./login";
import { removeFromTable } from "./utils";

export class User {
  constructor() {
    this.btnReturnList = document.querySelectorAll(".profile-ticket-list__btn-return");
    this.returnedTicketList = document.getElementById("returned-list");
    this.tableTickets = document.getElementById("user-ticket-list");
    this.tableDataList = document.querySelectorAll(".profile-ticket-list__table-data");

    this.arrTickets = ticketsList;

    this.btnLoadImage = document.getElementById("upload-img");
    this.sampleImg = document.querySelector(".profile__avatar-img");

    this.userNameField = document.getElementById("user-name");
    this.userPasswordField = document.getElementById("user-password");
    this.userEmailFiled = document.getElementById("user-email");
    this.userPhoneFiled = document.getElementById("user-phone");

    this.userBtnLogOut = document.getElementById("user-btn-logout");

    this.userDataForm = document.getElementById("user-data-form");

    this.usersList = JSON.parse(localStorage.getItem("usersList"));

    this.authLogin = JSON.parse(localStorage.getItem("auth"));
  }

  loadData() {
    this.userDataForm.addEventListener("submit", (e) => {
      e.preventDefault();
    });
    for (const ticketItem of this.arrTickets) {
      console.log(this.arrTickets);
      this.tableTickets.innerHTML += this.ticketWrap(
        ticketItem.id,
        ticketItem.type,
        ticketItem.age,
        ticketItem.date,
        ticketItem.time,
        ticketItem.amount
      );
    }
    this.isUser(this.authLogin.login);
  }

  isUser(login) {
    for (const user of this.usersList) {
      if (user.username === login) {
        this.userNameField.value = user.username;
        this.userPasswordField.value = user.password;
        this.userEmailFiled.value = user.email;
        if (user.phone === undefined) {
          this.userPhoneFiled.value = "Enter phone number";
        } else {
          this.userPhoneFiled.value = user.phone;
        }
      }
    }
  }

  returnTicket() {
    for (const btnReturnItem of this.btnReturnList) {
      btnReturnItem.addEventListener("click", (e) => {
        removeFromTable(e);
      });
    }
  }

  imagePreview() {
    this.btnLoadImage.addEventListener("change", (event) => {
      if (event.target.files.length > 0) {
        const src = URL.createObjectURL(event.target.files[0]);
        this.sampleImg.src = src;
      }
    });
  }

  userLogOut() {
    this.userBtnLogOut.addEventListener("click", () => {
      new Login().logOut();
    });
  }

  ticketWrap(id, type, age, date, time, amount) {
    return `
    <tr class="profile-ticket-list__table-row">
      <td class="profile-ticket-list__table-data">${id}</td>
      <td class="profile-ticket-list__table-data">${type}</td>
      <td class="profile-ticket-list__table-data">${age}</td>
      <td class="profile-ticket-list__table-data">${date}</td>
      <td class="profile-ticket-list__table-data">${time}</td>
      <td class="profile-ticket-list__table-data">${amount}</td>
      <td class="profile-ticket-list__table-data profile-ticket-list__btn-return">
        Return
      </td>
    </tr>
    `;
  }
}
