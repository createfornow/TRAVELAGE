let searchbtn = document.querySelector('#search-btn');
let searchbar = document.querySelector('.searching');
let formbtn = document.querySelector('#login-btn');
let loginform = document.querySelector('.login-form');
let formclose = document.querySelector('#form-close');

let menu = document.querySelector('#menu-bar');
let navBar = document.querySelector('.navbar');

let videobtn = document.querySelectorAll('.vid-btn');

videobtn.forEach(btn =>{
    btn.addEventListener('click', ()=>{
        document.querySelector('.controls .active').classList.remove('active');
        btn.classList.add('active');
        let src=btn.getAttribute('data-src');
        document.querySelector('#video-slider').src=src;
    })
})


menu.addEventListener('click', () => {
    menu.classList.toggle('fa-times');
    navBar.classList.toggle('active');
});


window.onscroll = () => {
    searchbtn.classList.remove('fa-times');
    searchbar.classList.remove('active');
}

searchbtn.addEventListener('click', () => {
    searchbtn.classList.toggle('fa-times');
    searchbar.classList.toggle('active');
});


formbtn.addEventListener('click', () => {
    loginform.classList.add('active');
});

formclose.addEventListener('click', () => {
    loginform.classList.remove('active');

});
var swiper = new Swiper(".review-slider", {
    spaceBetween: 20,
    loop: true,
    autoplay: {
        delay: 1800,
        disableOnInteraction: false,
    },
    breakpoints:{
        640: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
        },
    },
});
var swiper = new Swiper('.brand-slider', {
    spaceBetween: 20,
    loop: true,
    autoplay: {
        delay: 1400,
        disableOnInteraction: false,
    },
    breakpoints:{
        640: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
        },
    },
});
