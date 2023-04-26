const toggleBtn = document.querySelector(".hamburger");
const ham = document.querySelector(".ham");
const navbar = document.querySelector(".navbar");

function toggleNav() {
    navbar.classList.toggle("navbar-toggled");
    ham.classList.toggle("ri-menu-line");
    ham.classList.toggle("ri-menu-2-line");
}

toggleBtn.addEventListener("click", toggleNav);
