const projects =[
    {
        image:"gaadi.jpg",
        title:"Animated Navbar",
        description:"A responsive navigation bar with smooth animations.",

    },
    {
        image:"gaadi.jpg",
        title:"HTML CSS",
        description:"A responsive HTML CSS using HTML,CSS and JAVASCRIPT.",
    },
    {
    image:"gaadi.jpg",
    title:"Landing Pages",
    description:"A responsive landing page using HTML,CSS and JAVASCRIPT.",
    },
];
const container = document.getElementById("project-container");
projects.forEach(project =>{
    const card = document.createElement("div");
    card.className="project-card";
    card.innerHTML=`
    <img src="${project.image}" alt="${project.title}"/>
    <h4>${project.title}</h4>
    <p>${project.description}</p>
`;
container.appendChild(card);
});
