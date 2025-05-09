const hamburger=document.getElementById('ham-burger');
const navlinks=document.getElementById('nav_link');

hamburger.addEventListener('click',()=>{
    navlinks.classList.toggle('active');
});

const text="Hi, I'm ms.A";
const typedText=document.getElementById('typed-text');
let index=0;

function type(){
    if (index < text.length){
        typedText.textContent += text.charAt(index);
        index++;
        setTimeout(type,150);
    }
}
type();
//projects
