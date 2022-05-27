const navToggler = document.querySelector('.nav-toggler');
const navMenu = document.querySelector('.site-navbar ul');

function allEventListners(){
  navToggler.addEventListener('click', togglerClick);
}
function togglerClick() {
  navToggler.classList.toggle('toggler-open');//add/remove hamburger mjd silang
  navMenu.classList.toggle('open');//add/remove class open pada .site-navbar ul
}

allEventListners();