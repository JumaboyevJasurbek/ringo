const  hamburger = document.querySelector('.header__hamburger')
const menu = document.querySelector('.header__list')
const curtain = document.querySelector('.hero__huje-curtain')

hamburger.addEventListener('click' , (e) => {
    menu.classList.add('header__list')
})


