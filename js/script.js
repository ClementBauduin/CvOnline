const navbar = document.querySelector('.navbar');
const hamburgerButton = document.querySelector(".hamburger");


hamburgerButton.addEventListener("click",() => {
    navbar.classList.toggle('hidden');
})

console.log(navbar);