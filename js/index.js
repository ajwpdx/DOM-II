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


//6. resize: reports the window size

const heightOutput = document.querySelector('#height');
const widthOutput = document.querySelector('#width');

window.addEventListener('resize', function reportWindowSize() {
    heightOutput.textContent = window.innerHeight;
    widthOutput.textContent = window.innerWidth;
  })

//7. wheel:  the logo resizes when you wheel over it.

let scale = 1;
logoChange.onwheel = zoom;


function zoom(event) {
    event.preventDefault();
  
    scale += event.deltaY * -0.01;
  
    // Restrict scale
    scale = Math.min(Math.max(.125, scale), 4);
  
    // Apply scale transform
    logoChange.style.transform = `scale(${scale})`;
  }
  
//8. mouseout: when the mouse goes off of the nav item it turns green. 

navScroll.forEach(link =>{
    link.addEventListener('mouseout', () => {
    link.style.color = 'green'
})
})

//9. copy: copies data as uppercase (when pasted).

const welcomeSelect = document.querySelector ('#welcome')

welcomeSelect.addEventListener('copy', (event) => {
    const selection = document.getSelection();
    event.clipboardData.setData('text/plain', selection.toString().toUpperCase());
    event.preventDefault();
});

//10. contextmenu: text one page changes back to black when right-clicking mouse. 

document.addEventListener('contextmenu', () => bodyColor.style.color = 'black')
