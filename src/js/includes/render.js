export function render() {
  const btnUserPage = document.getElementById("user-page-btn");
  const btnAdminPage = document.getElementById("admin-page-btn");
  const btnLoginPage = document.getElementById("login-page-btn");
  const btnRegisterPage = document.getElementById("register-page-btn");

  const request = indexedDB.open("museumDB", 2);

  request.onsuccess = () => {
    const db = request.result;
    const tx = db.transaction("auth", "readonly");
    const authStore = tx.objectStore("auth");
    const authList = authStore.getAll();
    authList.onsuccess = () => {
      const auth = authList.result;
      console.log(auth[0].isAuth);
      if (auth !== null) {
        if (auth[0].isAdministrator && auth[0].isAuth) {
          showBtn(btnAdminPage);
          hideBtn(btnUserPage, btnLoginPage, btnRegisterPage);
        } else if (auth[0].isAdministrator === false && auth[0].isAuth) {
          showBtn(btnUserPage);
          hideBtn(btnAdminPage, btnLoginPage, btnRegisterPage);
        } else {
          showBtn(btnLoginPage, btnRegisterPage);
          hideBtn(btnAdminPage, btnUserPage);
        }
      } else {
        hideBtn(btnAdminPage, btnUserPage);
      }
    };
  };
}

function showBtn(...btns) {
  for (const btn of btns) {
    btn.style.display = "flex";
  }
}

function hideBtn(...btns) {
  for (const btn of btns) {
    btn.style.display = "none";
  }
}
