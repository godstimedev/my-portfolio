const navbar = document.getElementById("nav");
const toggleButton = document.querySelector(".menu-icon");
const navbarLinks = document.querySelector(".nav-items");
const sticky = navbar.offsetTop;

toggleButton.addEventListener("click", () => {
  navbarLinks.classList.toggle("active");
});

window.onscroll = function () {
  fixedNavbar();
};

const fixedNavbar = () => {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
};
