let body = document.querySelector("body");
let nav = document.querySelector("nav");


window.addEventListener('scroll', ()=>{
    const scrolled = window.scrollY;
    if(scrolled > 700){
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
})