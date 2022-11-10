let navList = document.querySelector(".nav-list");
let burgerBtn = document.querySelector(".burger");

burgerBtn.addEventListener("click", ()=> {
  navList.classList.toggle("nav-list--active");
  burgerBtn.classList.toggle("burger-active")
})


const swiper = new Swiper('.swiper', {
  // Optional parameters
  // direction: 'vertical',
  // loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },

  spaceBetween:100,

  // slidesPerView: 1,

  loop: true,
});


// Products pages
function toggleClass(clickEl, classEl) {
  clickEl.addEventListener("click", ()=> {
    classEl.classList.toggle("active-lists");
    clickEl.classList.toggle("active-arrow");
  })
}



