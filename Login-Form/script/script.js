// Overlay
const registerButton = document.getElementById("register");
const loginButton = document.getElementById("login");
const containerButton = document.getElementById("container");

registerButton.addEventListener("click", () => {
    container.classList.add("right-panel-active");
});

loginButton.addEventListener("click", () => {
    container.classList.remove("right-panel-active");
});


// Form Login
function checkLogin() {
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    // Tentuin email dan password admin
    if (email === 'kelompok3@gmail.com' && password === 'admin123') {
        alert('Login berhasil!, Selamat datang di BandungIn');
        // Redirect ke halaman dasbor
        window.location.href = '../article/index.html';
        return false; // Mencegah formulir untuk di-submit
    } else {
        alert('Login gagal. Periksa kembali username dan password.');
        return false; // Mencegah formulir untuk di-submit
    }
}

// Form Register
function checkRegister() {
  // Get form inputs
    var name = document.querySelector('input[placeholder="Name"]').value;
    var email = document.querySelector('input[placeholder="Email"]').value;
    var password = document.querySelector('input[placeholder="Password"]').value;

  // Validasi Name
    var nameRegex = /^[a-zA-Z\s]{2,50}$/;
    if (!nameRegex.test(name)) {
        alert("Nama salah. Silakan masukkan nama yang valid tanpa karakter atau angka khusus.");
        return false;
    }

  // Validasi Email
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert("Email tidak valid. Silakan isi alamat email.");
        return false;
    }

  // Validasi Password
    var passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!passwordRegex.test(password)) {
        alert("Kata sandi salah. Kata sandi harus terdiri dari minimal 8 karakter dan berisi minimal satu huruf besar, satu huruf kecil, satu angka, dan satu karakter khusus.");
        return false;
    }

  // If all validations pass, show success message
    alert("Registrasi Berhasil, Selamat bergabung di BandungIn.");
  // You can redirect to dasboard.html using window.location.href if needed
    window.location.href = "../article/index.html";

  // Prevent form submission for this example
    return false;
}