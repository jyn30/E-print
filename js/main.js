const menu = document.querySelector('.menu');
const nav = document.querySelector('nav');
menu.addEventListener('click', function() {
    menu.classList.toggle('active');
    nav.classList.toggle('show');
    document.querySelector("body").classList.toggle('over')


})