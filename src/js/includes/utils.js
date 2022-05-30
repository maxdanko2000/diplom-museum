export function isAuth(array, username, password) {
  return (
    array.filter((item) => item.username === username && item.password === password).length > 0
  );
}

export function showModal(modal) {
  setTimeout(() => {
    modal.style.display = "block";
  }, 3000);
}
