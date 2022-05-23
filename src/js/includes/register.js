export class Register {
  constructor() {
    this.usernameField = document.getElementById("username");
    this.emailField = document.getElementById("email");
    this.passwordField = document.getElementById("password");
    this.passwordConfirmField = document.getElementById("password-confirm");
    this.btnRegister = document.getElementById("btn-register");
  }
  authorize() {
    let id = 0;
    const users = [];
    this.btnRegister.addEventListener("click", (e) => {
      e.preventDefault();
      if (
        this.isValid(this.usernameField.value) &&
        this.isValid(this.emailField.value) &&
        this.isValid(this.passwordField.value) &&
        this.passwordConfirmField.value === this.passwordField.value
      ) {
        let user = {
          id: id,
          name: `${this.usernameField.value}`,
          password: `${this.passwordField.value}`,
          email: `${this.emailField.value}`,
        };
        id++;
        this.usernameField.value = "";
        this.emailField.value = "";
        this.passwordField.value = "";
        this.passwordConfirmField.value = "";
        this.btnRegister.disabled = true;
        users.push(user);
        console.log(users);
        console.log("Success");
      } else {
        this.usernameField.value = "";
        this.emailField.value = "";
        this.passwordField.value = "";
        this.passwordConfirmField.value = "";
        console.log("Failed");
      }
    });
  }
  isValid(value) {
    return value.length > 0;
  }
}
