/* navbar */
const menu = document.querySelector('#mobile-menu')
const menuLinks = document.querySelector('.nav__menu')
const gotoTop = document.querySelector('.gotoTop')

menu.addEventListener('click', function(){
    menu.classList.toggle('is-active')
    menuLinks.classList.toggle('active')
})

window.addEventListener('scroll', function(){
    gotoTop.style.display = 'block'
})