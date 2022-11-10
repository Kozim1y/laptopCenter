let navList = document.querySelector(".nav-list");
let burgerBtn = document.querySelector(".burger");

burgerBtn.addEventListener("click", ()=> {
  navList.classList.toggle("nav-list--active");
  burgerBtn.classList.toggle("burger-active")
})

// Products pages
function toggleClass(clickEl, classEl) {
  clickEl.addEventListener("click", ()=> {
    classEl.classList.toggle("active-lists");
  })
}

let categoryTitle = document.querySelector(".categorys__title");
let categorysList = document.querySelector(".categorys__list");

let manufacturersTitle = document.querySelector(".manufacturers__title");
let manufacturersList = document.querySelector(".manufacturers__list");

let priceTitle = document.querySelector(".price__title");
let priceList = document.querySelector(".price__list");

let colorsTitle = document.querySelector(".colors__title");
let colorsList = document.querySelector(".colors__list");


toggleClass(categoryTitle, categorysList);
toggleClass(manufacturersTitle, manufacturersList);
toggleClass(priceTitle, priceList);
toggleClass(colorsTitle, colorsList);


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


