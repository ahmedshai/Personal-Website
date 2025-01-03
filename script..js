function toogleMenu(){

    var navBtn = document.getElementById('nav-btn');

    if (navBtn.innerHTML === '<span class="material-symbols-outlined">menu</span>') {
        navBtn.innerHTML = '<span class="material-symbols-outlined">close</span>';
    } else {
        navBtn.innerHTML = '<span class="material-symbols-outlined">menu</span>';
    }
}

document.getElementById("nav-btn").addEventListener("click", function() {
    var links = document.querySelector(".nav-links");

    if (links.style.display === "none" || links.style.display === "") {
        links.style.display = "block";
    } else {
        links.style.display = "none";
    }
});

window.onscroll=function(){scrollFunction()};
var navBar=document.getElementById("navbar");
var logo=document.getElementById("logo");
function scrollFunction(){
    if(document.body.scrollTop > 50 || document.documentElement.scrollTop > 50){
        navBar.style.background="linear-gradient(155deg,#fff,#A46CEA)";
        logo.style.color="#403d6c";
    }else{
        navBar.style.background="transparent";
        logo.style.color="#fff";
    }
}