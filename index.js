let offset = 0;
const slider = document.querySelector('.slider-line');

document.querySelector('.arrow-next').addEventListener('click', function(){
    offset += 300;
    if(offset > 8300){
        offset = 0;
    }
    slider.style.left = -offset + 'px';
});

document.querySelector('.arrow-prev').addEventListener('click', function(){
    offset -= 300;
    if(offset < 0){
        offset = 8300;
    }
    slider.style.left = -offset + 'px';
});




const faqs = document.querySelectorAll(".faq");
const plus = document.querySelectorAll(".img-plus")

faqs.forEach(faq => {
    faq.addEventListener('click', () => {
        faq.classList.toggle("active");
        plus.classList.toggle("active");
    })
})

let humburger = document.querySelector('.header__humburger'),
    nav = document.getElementById('test'),
    links = document.querySelectorAll('#menu_link');


humburger.addEventListener('click', ()=>{
    nav.classList.toggle('head-navigation__active')
})

for(let i = 0; i < links.length; i++){
    links[i].addEventListener('click', () => {
        nav.classList.toggle('head-navigation__active')
    })
}