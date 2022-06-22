import { usersList } from "./db";
import { Idb } from "./idb";
import { isAuth } from "./utils";

export class Register {
  constructor() {
    this.usernameField = document.getElementById("register-username");
    this.emailField = document.getElementById("register-email");
    this.passwordField = document.getElementById("register-password");
    this.passwordConfirmField = document.getElementById("register-password-confirm");

    this.btnRegister = document.getElementById("btn-register");

    this.formEl = document.getElementById("register-form");
    this.usersList;
  }
  register() {
    this.formEl.addEventListener("submit", (e) => {
      e.preventDefault();
      if (this.passwordConfirmField.value === this.passwordField.value) {
        this.request = indexedDB.open("museumDB", 2);
        this.request.onsuccess = () => {
          this.db = this.request.result;
          this.tx = this.db.transaction("usersList", "readwrite");
          let usersStore = this.tx.objectStore("usersList");
          let users = usersStore.getAll();
          users.onsuccess = () => {
            this.usersList = users.result;
            if (!isAuth(this.usersList, this.usernameField.value, this.passwordField.value)) {
              let user = {
                username: `${this.usernameField.value}`,
                password: `${this.passwordField.value}`,
                email: `${this.emailField.value}`,
              };
              this.btnRegister.disabled = true;
              usersStore.add(user);
              alert(`User: ${user.username} successfully register! Please sign in.`);
              this.btnRegister.disabled = false;
              this.clearTickets();
            } else {
              alert("User with current name already register!");
            }
          };
        };
      } else {
        alert("Passwords dont't match!");
      }
    });
  }

  clearFields() {
    this.usernameField.value = "";
    this.emailField.value = "";
    this.passwordField.value = "";
    this.passwordConfirmField.value = "";
  }

  clearTickets() {
    let ticketsList = [];
    localStorage.setItem("returnedTickets", JSON.stringify(ticketsList));
    localStorage.setItem("ticketsList", JSON.stringify(ticketsList));
  }
}
