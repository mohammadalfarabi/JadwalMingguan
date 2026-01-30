const ADMIN_USER = "admin";
const ADMIN_PASS = "12345";

function login() {
  const user = document.getElementById("username").value;
  const pass = document.getElementById("password").value;
  const msg  = document.getElementById("loginMsg");

  if (user === ADMIN_USER && pass === ADMIN_PASS) {
    localStorage.setItem("isAdmin", "true");
    showAdmin();
  } else {
    msg.textContent = "Username atau password salah";
    msg.style.color = "red";
  }
}

function logout() {
  localStorage.removeItem("isAdmin");
  location.reload();
}

function showAdmin() {
  document.getElementById("loginBox").style.display = "none";
  document.getElementById("adminPanel").style.display = "block";
}

// auto cek login
if (localStorage.getItem("isAdmin") === "true") {
  showAdmin();
}
