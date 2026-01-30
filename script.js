const ADMIN_USER = "admin";
const ADMIN_PASS = "12345";

// Fungsi Login
function login() {
    const user = document.getElementById("username").value;
    const pass = document.getElementById("password").value;
    const msg = document.getElementById("loginMsg");

    if (user === ADMIN_USER && pass === ADMIN_PASS) {
        localStorage.setItem("isAdmin", "true");
        showAdmin();
    } else {
        msg.textContent = "Username atau password salah!";
        msg.style.color = "#e74c3c";
        // Reset field password saja untuk keamanan
        document.getElementById("password").value = "";
    }
}

// Fungsi Logout
function logout() {
    localStorage.removeItem("isAdmin");
    location.reload();
}

// Menampilkan Panel Admin
function showAdmin() {
    document.getElementById("loginBox").style.display = "none";
    document.getElementById("adminPanel").style.display = "block";
}

// Cek status login saat halaman dimuat
window.onload = function() {
    if (localStorage.getItem("isAdmin") === "true") {
        showAdmin();
    }
};

// Fitur tekan Enter untuk Login
document.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        login();
    }
});
