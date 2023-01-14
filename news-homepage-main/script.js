const openMenu = document.getElementById("menu-button");
const closeMenu = document.getElementById("menu-close");
const navbar = document.querySelector("nav");

openMenu.addEventListener('click', function (){
    navbar.classList.add("open");
});

closeMenu.addEventListener('click', function (){
    navbar.classList.remove("open");
});
