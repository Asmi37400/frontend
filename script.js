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
const projects =[
    {
        Image:"gaadi.jpg",
        title:"Animated Navbar",
        description:"A responsive navigation bar with smooth animations",

    },
    {
        image:"gaadi.jpg",
        title:"HTML CSS",
        description:"A responsive landing page using HTML,CSS and JAVASCRIPT",
    },
];
const container = document.getElementById("project-container");
projects.forEach(project =>{
    const card = document.createElement("div");
    card.className="project-card",
    card.innerHTML=`
    <img src="${project.image}" alt="${project.title}"/>
    <h3>${project.title}</h3>
    <p>${project.description}</p>
`;
container.appendChild(card);
});