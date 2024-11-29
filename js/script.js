const words = ["Designer", "Photographer ", "Develop ",'Freelancer'];
let currentWordIndex = 0;
let currentCharIndex = 0;
const cursor = document.getElementById('cursor');
const text = document.getElementById('text');

function updateText() {
    text.textContent = words[currentWordIndex].substring(0, currentCharIndex);
    currentCharIndex++;
    if (currentCharIndex > words[currentWordIndex].length) {
        currentWordIndex++;
        currentCharIndex = 0;
        if (currentWordIndex >= words.length) {
            currentWordIndex = 0; // إعادة بدء الكلمة
        }
    }
}

setInterval(updateText, 500)



let counter =document.querySelectorAll('.counter')
const section= document.querySelector('.backImg')
let started= false

window.onscroll=function(){
    if(window.scrollY >= section.offsetTop){
        if(!started){
             counter.forEach(num=> setcount(num))    
        }
     
   started=true
    }
   
 
}
function setcount(el){
  let gole=el.dataset.gole;
  let count =setInterval(()=>{
el.textContent++
if(el.textContent==gole){
    clearInterval(count)
}
  },3000 / gole)
}
