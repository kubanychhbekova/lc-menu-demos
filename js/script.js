const swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});
let modalBtn = document.querySelector(".modal-btn")
let closeModal = document.querySelector(".close-btn")

modalBtn.addEventListener('click',() =>{
    document.querySelector('.modal').style.display = 'block'
})
closeModal.addEventListener('click',() =>{
    document.querySelector('.modal').style.display = 'none'
})
