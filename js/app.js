let nav = document.querySelector("nav");
let intFrameHeight = window.innerHeight;


window.addEventListener('scroll', ()=>{
    const scroll = window.scrollY;
    if(scroll >= intFrameHeight){
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
})