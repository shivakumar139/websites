const btn = document.querySelector(".menu");
const nav = document.querySelector(".navigation-links");
btn.addEventListener("click",()=>{
    nav.classList.toggle("navigation-active");
});