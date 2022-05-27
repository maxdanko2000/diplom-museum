import { ticketsList } from "./db";
import { removeFromTable } from "./utils";

export class User {
  constructor() {
    this.btnReturnList = document.querySelectorAll(".profile-ticket-list__btn-return");
    this.returnedTicketList = document.getElementById("returned-list");
    this.tableTickets = document.getElementById("user-ticket-list");
    this.tableDataList = document.querySelectorAll(".profile-ticket-list__table-data");
    this.arrTickets = JSON.parse(localStorage.getItem("ticketsList"));
    this.btnLoadImage = document.getElementById("upload-img");
    this.sampleImg = document.querySelector(".profile__avatar-img");
    this.userNameField = document.getElementById("user-name");
    this.userPasswordField = document.getElementById("user-password");
    this.userEmailFiled = document.getElementById("user-email");
    this.userPhoneFiled = document.getElementById("user-phone");
  }

  loadData() {
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
