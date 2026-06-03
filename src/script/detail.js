const params = new URLSearchParams(window.location.search)
const id = Number(params.get("id"))
const portofolio = portofolios.find(
    item => item.id === id
)
document.getElementById("title").textContent = portofolio.title
document.getElementById("image").src = portofolio.image
document.getElementById("description").textContent = portofolio.description
document.getElementById("project-link").href = portofolio.url;

const projectLink = document.getElementById("project-link");

if(portofolio.urlProject){
    projectLink.href = portofolio.urlProject;
}else{
    projectLink.style.display = "none";
}