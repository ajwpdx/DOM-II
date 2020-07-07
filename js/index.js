// Your code goes here
console.log('hi')


//1. mouseover: turns nav links blue when moused-over
const navScroll = document.querySelectorAll('.nav-link')

navScroll.forEach(link =>{
    link.addEventListener('mouseover', () => {
    link.style.color = 'blue'
})
})

//2. click: 

const logoChange = document.querySelector ('.logo-heading')

logoChange.addEventListener('click', () => {
    logoChange.textContent = "Buf Sun"    
})