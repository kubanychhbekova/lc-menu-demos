const swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});
let modalBtn = document.querySelector(".modal-btn")

modalBtn.addEventListener('click',() =>{
    document.querySelector('#modal').style.display = 'block'
})
