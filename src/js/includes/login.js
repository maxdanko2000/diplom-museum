import { auth, usersList } from "./db";
import { isAuth } from "./utils";

export class Login {
  constructor() {
    this.userNameField = document.getElementById("login-username");
    this.passwordField = document.getElementById("login-password");
    this.btnLogin = document.getElementById("btn-login");
    this.loginForm = document.getElementById("login-form");
    this.usersList;
    this.db;
    this.request;
    this.tx;
  }

  authorize() {
    this.loginForm.addEventListener("submit", (e) => {
      e.preventDefault();
      this.request = indexedDB.open("museumDB", 2);
      this.request.onsuccess = () => {
        this.db = this.request.result;
        this.tx = this.db.transaction("usersList", "readonly");
        let usersStore = this.tx.objectStore("usersList");
        let users = usersStore.getAll();
        users.onsuccess = () => {
          this.usersList = users.result;
          if (isAuth(this.usersList, this.userNameField.value, this.passwordField.value)) {
            if (this.isAdmin()) {
              let transaction = this.db.transaction("auth", "readwrite");
              let authStore = transaction.objectStore("auth");
              auth.isAdministrator = true;
              auth.isAuth = true;
              auth.login = this.userNameField.value;
              authStore.clear();
              authStore.add(auth);
              document.location.pathname = "/index.html";
            } else {
              let transaction = this.db.transaction("auth", "readwrite");
              let authStore = transaction.objectStore("auth");
              auth.isAdministrator = false;
              auth.isAuth = true;
              auth.login = this.userNameField.value;
              authStore.clear();
              authStore.add(auth);
              document.location.pathname = "/index.html";
            }
          } else {
            let transaction = this.db.transaction("auth", "readwrite");
            let authStore = transaction.objectStore("auth");
            auth.isAdministrator = false;
            auth.isAuth = false;
            auth.login = "";
            authStore.clear();
            authStore.add(auth);
          }
        };
      };
    });
  }

  logOut() {
    this.request = indexedDB.open("museumDB", 2);
    this.request.onsuccess = () => {
      this.db = this.request.result;
      this.tx = this.db.transaction("usersList", "readonly");
      let transaction = this.db.transaction("auth", "readwrite");
      let authStore = transaction.objectStore("auth");
      auth.isAdministrator = false;
      auth.isAuth = false;
      auth.login = "";
      authStore.clear();
      authStore.add(auth);
      document.location.pathname = "/login-page.html";
    };
  }

  clearFields() {
    this.userNameField.value = "";
    this.passwordField.value = "";
  }

  isAdmin() {
    if (this.userNameField.value === "admin" && this.passwordField.value === "admin") {
      for (const item of usersList) {
        return item.isAdmin;
      }
    } else return false;
  }
}
