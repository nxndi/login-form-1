// Toggle & Responsive Navigation
const navSlide = () => {
    const burger = document.querySelector(".burger");
    const navLists = document.querySelector("nav");

    burger.addEventListener("click", () => {
        navLists.classList.toggle("nav-active");
        burger.classList.toggle("toggle-burger");
    });
};

navSlide();

// Slider
var slides = document.querySelectorAll('.slide');
var btns = document.querySelectorAll('.dot');
let currentSlide = 1;

// Javascrip for image manual navigator
var manualNav = function(manual){
    slides.forEach((slide) => {
        slide.classList.remove('active');

        btns.forEach((dot) => {
            dot.classList.remove('active');
        });
    });

    slides[manual].classList.add('active');
    btns[manual].classList.add('active');
}

btns.forEach((dot, i) => {
    dot.addEventListener("click", () => {
        manualNav(i);
        currentSlide = i;
    });
});

// Javascrip for image autoplay navigator
var repeat = function(activeClass){
    let active = document.getElementsByClassName('active');
    let i = 1;

    var repeater = () => {
        setTimeout(function(){
            [...active].forEach((activeSlide) => {
                activeSlide.classList.remove('active');
            });

            slides[i].classList.add('active');
            btns[i].classList.add('active');
            i++;

            if(slides.length == i){
                i = 0;
            }
            if(i >= slides.length){
                return;
            }
            repeater();
        }, 10000);
    }
    repeater();
}
repeat();

// Comment
function tambahKomentar() {
    // Mendapatkan nilai nama dan komentar dari input
    var nama = document.getElementById('name').value;
    var komentar = document.getElementById('comment').value;

    // Membuat elemen div untuk menampilkan nama dan komentar
    var komentarDiv = document.createElement('div');
    komentarDiv.classList.add('comment-item'); // Tambahkan class untuk styling

    // Membuat elemen paragraf untuk menampilkan nama
    var namaParagraf = document.createElement('p');
    namaParagraf.textContent = 'Nama : ' + nama;

    // Membuat elemen paragraf untuk menampilkan komentar
    var komentarParagraf = document.createElement('p');
    komentarParagraf.textContent = 'Komentar : ' + komentar;

    // Membuat tombol edit
    var tombolEdit = document.createElement('button');
    tombolEdit.textContent = 'Edit';
    tombolEdit.onclick = function() { editKomentar(komentarParagraf); };

    // Membuat tombol hapus
    var tombolHapus = document.createElement('button');
    tombolHapus.textContent = 'Hapus';
    tombolHapus.onclick = function() { hapusKomentar(komentarDiv); };

    // Menambahkan elemen-elemen ke dalam div komentar
    komentarDiv.appendChild(namaParagraf);
    komentarDiv.appendChild(komentarParagraf);
    komentarDiv.appendChild(tombolEdit);
    komentarDiv.appendChild(tombolHapus);

    // Menambahkan komentarDiv ke dalam div dengan id 'komentarContainer'
    var komentarContainer = document.getElementById('comment-container');
    komentarContainer.appendChild(komentarDiv);

    // Mengosongkan input setelah submit
    document.getElementById('name').value = "";
    document.getElementById('comment').value = "";
}

function editKomentar(komentarParagraf) {
    var editValue = prompt('Edit komentar:', komentarParagraf.textContent.split(':')[1].trim());
    if (editValue !== null) {
        komentarParagraf.textContent = 'Komentar: ' + editValue;
    }
}

function hapusKomentar(komentarDiv) {
    var konfirmasi = confirm('Anda yakin ingin menghapus komentar?');
    if (konfirmasi) {
        var komentarContainer = document.getElementById('comment-container');
        komentarContainer.removeChild(komentarDiv);
    }
}

// Fungsi untuk mengatur tinggi textarea agar dapat discroll
function autoSize(textarea) {
    textarea.style.height = 'auto';
    textarea.style.height = (textarea.scrollHeight) + 'px';
}