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
const reviews=[
    {
     image:"gaadi.jpg",
     title:"Elon Musk",
     description:"Great work very creative and professional.",
    },
    {
        image:"gaadi.jpg",
        title:"Mark Zuckerberg",
        description:"Love the design and animation and designs.Highly recommended.",

    },
    {
        image:"gaadi.jpg",
        title:"Steve Jobs",
        description:"Clean code and responsive layout.Impressive.",
    },
];
const container2 = document.getElementById("review-container");
reviews.forEach(review=>{
    const card2= document.createElement("div");
    card2.className="card-review";
    card2.innerHTML=`
    <img src="${review.image}"alt="${reviews.title}"/>
    <h4>${review.title}</h4>
    <p>${review.description}</p>
    `;
    container2.appendChild(card2);
});