import { ticketsList, returnedTickets } from "./db";
import { Login } from "./login";

export class User {
  constructor() {
    this.btnReturnList = document.querySelectorAll(".profile-ticket-list__btn-return");

    this.returnedTicketList = document.getElementById("returned-list");
    this.ticketList = document.getElementById("user-ticket-list");
    this.tableDataList = document.querySelectorAll(".profile-ticket-list__table-data");

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

    this.btnDeleteAccount = document.getElementById("btn-delete-account");

    this.ticketsCounter = document.getElementById("tickets-counter");
    this.returnedTicketsCounter = document.getElementById("returned-tickets-counter");

    this.localArrTickets = JSON.parse(localStorage.getItem("ticketsList"));
    this.localArrReturned = JSON.parse(localStorage.getItem("returnedTickets"));
  }

  loadData() {
    this.userDataForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const usersList = JSON.parse(localStorage.getItem("usersList"));
      for (const user of usersList) {
        if (user.username === this.authLogin.login) {
          user.username = this.userNameField.value;
          user.password = this.userPasswordField.value;
          user.email = this.userEmailFiled.value;
          user.phone = this.userPhoneFiled.value;
          localStorage.setItem("usersList", JSON.stringify(usersList));
          this.authLogin.login = this.userNameField.value;
          localStorage.setItem("auth", JSON.stringify(this.authLogin));
        }
      }
    });

    if (!this.localArrReturned) {
      localStorage.setItem("returnedTickets", JSON.stringify(returnedTickets));
      this.localArrReturned = JSON.parse(localStorage.getItem("returnedTickets"));
    }

    if (this.localArrTickets.length === null) {
      this.ticketsCounter.innerHTML = "0";
    } else {
      this.ticketsCounter.innerHTML = this.localArrTickets.length;
    }
    if (this.localArrReturned.length === null) {
      this.returnedTicketsCounter.innerHTML = "0";
    } else {
      this.returnedTicketsCounter.innerHTML = this.localArrReturned.length;
    }

    for (const ticketItem of this.localArrTickets) {
      this.ticketList.innerHTML += this.ticketWrap(
        ticketItem.id,
        ticketItem.type,
        ticketItem.age,
        ticketItem.date,
        ticketItem.time,
        ticketItem.amount
      );
    }
    this.localArrReturned = JSON.parse(localStorage.getItem("returnedTickets"));
    for (const returnedTicket of this.localArrReturned) {
      this.returnedTicketList.innerHTML += this.returnTicketWrap(
        returnedTicket.id,
        returnedTicket.type,
        returnedTicket.age,
        returnedTicket.date,
        returnedTicket.time,
        returnedTicket.amount
      );
    }

    this.loadUserData(this.authLogin.login);
  }

  loadUserData(login) {
    for (const user of this.usersList) {
      if (user.username === login) {
        this.userNameField.value = user.username;
        this.userPasswordField.value = user.password;
        this.userEmailFiled.value = user.email;
        if (user.phone === undefined) {
          this.userPhoneFiled.placeholder = "Enter phone number";
        } else {
          this.userPhoneFiled.value = user.phone;
        }
      }
    }
  }

  returnTicket() {
    for (const btnReturnItem of this.btnReturnList) {
      btnReturnItem.addEventListener("click", (e) => {
        this.localArrTickets = JSON.parse(localStorage.getItem("ticketsList"));
        this.localArrReturned = JSON.parse(localStorage.getItem("returnedTickets"));

        e.path[1].style.display = "none";

        localStorage.setItem(
          "ticketsList",
          JSON.stringify(
            this.localArrTickets.filter(
              (ticket) => +ticket.id !== +e.path[1].childNodes[1].innerHTML
            )
          )
        );

        const returnedTicket = {
          id: e.path[1].childNodes[1].innerHTML,
          type: e.path[1].childNodes[3].innerHTML,
          age: e.path[1].childNodes[5].innerHTML,
          date: e.path[1].childNodes[7].innerHTML,
          time: e.path[1].childNodes[9].innerHTML,
          amount: e.path[1].childNodes[11].innerHTML,
        };

        this.localArrReturned.push(returnedTicket);

        localStorage.setItem("returnedTickets", JSON.stringify(this.localArrReturned));

        for (const returnedTicket of this.localArrReturned) {
          this.returnedTicketList.innerHTML += this.returnTicketWrap(
            returnedTicket.id,
            returnedTicket.type,
            returnedTicket.age,
            returnedTicket.date,
            returnedTicket.time,
            returnedTicket.amount
          );
        }

        this.ticketsCounter.innerHTML--;
        this.returnedTicketsCounter.innerHTML++;

        document.location.reload();
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

  deleteAccount() {
    this.btnDeleteAccount.addEventListener("click", () => {
      const result = this.usersList.filter((user) => user.username !== this.authLogin.login);
      localStorage.setItem("usersList", JSON.stringify(result));
      document.location.pathname = "/login-page.html";
    });
  }

  returnTicketWrap(id, type, age, date, time, amount) {
    return `
    <tr class="profile-ticket-list__table-row">
    <td class="profile-ticket-list__table-data">${id}</td>
      <td class="profile-ticket-list__table-data">${type}</td>
      <td class="profile-ticket-list__table-data">${age}</td>
      <td class="profile-ticket-list__table-data">${date}</td>
      <td class="profile-ticket-list__table-data">${time}</td>
      <td class="profile-ticket-list__table-data">${amount}</td>
    </tr>
    `;
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
