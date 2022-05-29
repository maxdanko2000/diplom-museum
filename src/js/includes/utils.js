export function isAuth(array, username, password) {
  return (
    array.filter((item) => item.username === username && item.password === password).length > 0
  );
}

export function removeFromTable(e) {
  e.path[1].style.display = "none";
  console.log("removed");
  return this;
}

export function showModal(modal) {
  setTimeout(() => {
    modal.style.display = "block";
  }, 3000);
}
