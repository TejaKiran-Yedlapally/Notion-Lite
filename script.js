const navLinks=document.getElementsByClassName("nav-links-mobile")[0];
let navButton =document.getElementsByClassName("menu")[0];

navButton.addEventListener("click", () => {
    navLinks.style.display = navLinks.style.display === "flex" ? "none" : "flex";
});
const logo=document.getElementsByClassName("logo")[0];
const sidebar=document.getElementsByClassName("side-bar")[0];

const main=document.getElementsByClassName("main-section")[0];

logo.addEventListener("click",(e)=>
{
     e.preventDefault();
     sidebar.style.display = sidebar.style.display==="flex" ? "none" : "flex";
     main.style.display= sidebar.style.display==="flex" ? "none" : "flex";
})



