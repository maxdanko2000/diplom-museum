import { usersList } from "./db";
import { isAuth } from "./utils";

export class Register {
  constructor() {
    this.usernameField = document.getElementById("register-username");
    this.emailField = document.getElementById("register-email");
    this.passwordField = document.getElementById("register-password");
    this.passwordConfirmField = document.getElementById("register-password-confirm");

    this.btnRegister = document.getElementById("btn-register");

    this.formEl = document.getElementById("register-form");

    this.usersList = JSON.parse(localStorage.getItem("usersList"));
  }
  register() {
    if (!this.usersList) {
      localStorage.setItem("usersList", JSON.stringify(usersList));
      this.usersList = JSON.parse(localStorage.getItem("usersList"));
    }
    this.formEl.addEventListener("submit", (e) => {
      e.preventDefault();
      if (this.passwordConfirmField.value === this.passwordField.value) {
        if (!isAuth(this.usersList, this.usernameField.value, this.passwordField.value)) {
          let user = {
            username: `${this.usernameField.value}`,
            password: `${this.passwordField.value}`,
            email: `${this.emailField.value}`,
          };

          this.btnRegister.disabled = true;
          usersList.push(user);
          localStorage.setItem("usersList", JSON.stringify(usersList));
          alert(`User: ${user.username} successfully register! Please sign in.`);
          this.btnRegister.disabled = false;
          this.clearTickets();
        } else {
          alert("User with current name already register!");
        }
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
    localStorage.setItem("ticketsList", JSON.stringify(ticketsList));
  }
}
