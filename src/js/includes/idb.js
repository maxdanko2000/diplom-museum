import { auth, usersList } from "./db";

export class Idb {
  constructor() {
    this.db;
    this.request;
  }

  init() {
    this.setRequest();
  }

  setRequest() {
    this.request = indexedDB.open("museumDB", 1);
    this.request.onupgradeneeded = (event) => {
      this.db = event.target.result;
      if (!this.db.objectStoreNames.contains("auth")) {
        let authStore = this.db.createObjectStore("auth", { keyPath: "login" });
        authStore.createIndex("isAdministrator", "isAdministrator");
        authStore.createIndex("isAuth", "isAuth");
        authStore.createIndex("login", "login");
        authStore.add(auth);
      }
      if (!this.db.objectStoreNames.contains("usersList")) {
        let userStore = this.db.createObjectStore("usersList", { keyPath: "username" });
        userStore.createIndex("username", "username", { unique: true });
        userStore.createIndex("password", "password");
        userStore.createIndex("email", "email");
        userStore.createIndex("phone", "phone");
        userStore.createIndex("isAdmin", "isAdmin");
        this.fillDB(userStore, usersList);
      }
    };
  }

  fillDB(store, array) {
    for (let item in array) {
      store.add(array[item]);
    }
  }
}
