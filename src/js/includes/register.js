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
  }
  register() {
    let id = 0;
    this.formEl?.addEventListener("submit", (e) => {
      e.preventDefault();
      if (this.passwordConfirmField.value === this.passwordField.value) {
        if (!isAuth(usersList, this.usernameField.value, this.passwordField.value)) {
          let user = {
            id: id,
            username: `${this.usernameField.value}`,
            password: `${this.passwordField.value}`,
            email: `${this.emailField.value}`,
          };
          id++;
          this.btnRegister.disabled = true;
          usersList.push(user);
          alert(`User: ${user.username} successfully register! Please sign in.`);
          this.clearFields();
          this.btnRegister.disabled = false;
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
}
