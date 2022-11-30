const search = document.querySelector("#search");
const close = document.querySelector("#close");
const searchForm = document.querySelector("#search-form");
const bars = document.querySelector(".fa-bars");
search.addEventListener("click",function(){
    searchForm.classList.toggle("active")
})
close.addEventListener("click",function(){
    searchForm.classList.remove("active")
})

bars.addEventListener("click",function(){
    document.querySelector(".main-nav").classList.toggle("responsive");
    document.querySelector(".main-header").classList.toggle("responsive");
})

function loader(){
    document.querySelector(".loading").classList.add("fade-out")
}

function fadeOut(){
    setInterval(loader,3000)
}

window.onload = fadeOut();