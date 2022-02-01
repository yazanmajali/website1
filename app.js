const menu = document.querySelector('#movile-menu')
const menuLinks = document.querySelector('.navbar__menu')

menu.addEventListener('click',function(){
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('aactive')
});

let productsincart=[];
const parentElement
