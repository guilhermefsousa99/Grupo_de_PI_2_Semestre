username.innerHTML = `${sessionStorage.usuario}`;

function logout() {
  sessionStorage.clear();
  window.location.href = "./login.html"
}

