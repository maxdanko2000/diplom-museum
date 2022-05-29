export function render() {
  const btnUserPage = document.getElementById("user-page-btn");
  const btnAdminPage = document.getElementById("admin-page-btn");
  const btnLoginPage = document.getElementById("login-page-btn");
  const btnRegisterPage = document.getElementById("register-page-btn");
  const auth = JSON.parse(localStorage.getItem("auth"));
  if (auth !== null) {
    if (auth.isAdmin && auth.isAuth) {
      showBtn(btnAdminPage);
      hideBtn(btnUserPage, btnLoginPage, btnRegisterPage);
    } else if (auth.isAdmin === false && auth.isAuth) {
      showBtn(btnUserPage);
      hideBtn(btnAdminPage, btnLoginPage, btnRegisterPage);
    } else {
      showBtn(btnLoginPage, btnRegisterPage);
      hideBtn(btnAdminPage, btnUserPage);
    }
  } else {
    hideBtn(btnAdminPage, btnUserPage);
  }
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
