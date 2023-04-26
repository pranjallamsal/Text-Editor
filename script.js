const toggleBtn = document.querySelector(".hamburger");
const ham = document.querySelector(".ham");
const navbar = document.querySelector(".navbar");
const resetBtn = document.querySelector(".reset-text");
const textArea = document.querySelector(".editor");

function toggleNav() {
    navbar.classList.toggle("navbar-toggled");
    ham.classList.toggle("ri-menu-line");
    ham.classList.toggle("ri-menu-2-line");
}

function resetText() {
    textArea.value = "";
}

toggleBtn.addEventListener("click", toggleNav);

resetBtn.addEventListener("click", resetText);