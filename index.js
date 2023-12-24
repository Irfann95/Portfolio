const navMenu = document.querySelector('.nav__menu')
const navCloseBtn = document.querySelector('.nav__toggle-croix')
const navOpenBtn = document.querySelector('.nav__toggle-open')

const openNavHandler = () => {
    navMenu.style.display = 'flex';
    navOpenBtn.style.display='none'
    navCloseBtn.style.display='inline-block'
}

const closeNavHandler = () => {
    navMenu.style.display = 'none';
    navOpenBtn.style.display='inline-block'
    navCloseBtn.style.display='none'
}


navOpenBtn.addEventListener('click', openNavHandler)
navCloseBtn.addEventListener('click', closeNavHandler)



