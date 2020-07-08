// Your code goes here
console.log('hi')


//1. mouseover: turns nav links blue when moused-over
const navScroll = document.querySelectorAll('.nav-link')

navScroll.forEach(link =>{
    link.addEventListener('mouseover', () => {
    link.style.color = 'blue'
})
})

//2. click: logo changes to "Buf Sun" when clicked

const logoChange = document.querySelector ('.logo-heading')

logoChange.addEventListener('click', () => {
    logoChange.textContent = "Buf Sun"    
})

//3. scroll: change text color to red when scrolled

const bodyColor = document.querySelector ('body')

document.addEventListener('scroll', () => bodyColor.style.color = 'red')


//4. keydown:  toggle the logo on and off when pressing the "Escape" key
document.addEventListener('keydown', function (event){
    if (event.key === 'Escape'){
        logoChange.classList.toggle('off')    
    }
})

//5. doubleclick: images disapear when double clicked

const imgSelector = document.querySelector('.intro img')

document.addEventListener('dblclick', function (event){
           imgSelector.classList.toggle('off') 
    })