const ham = document.querySelector('.hamburger')
const menu = document.querySelector('.navbar')

ham.addEventListener("click",()=>{
    ham.classList.toggle("active")
    menu.classList.toggle("active")
})

const mainHeader = document.querySelector('.main-header')

window.addEventListener('scroll',function(){
    mainHeader.classList.toggle("sticky",window.scrollY > 0);
})