$('.knives-with__container-tablet').slick({
    dots: false,
    arrows: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 770,
            settings: {
                slidesToShow: 4,
                infinite: true,
            }
        },
        {
            breakpoint: 330,
            settings: {
                slidesToShow: 2,
            }
        },
    ]
});
let modal = document.querySelector('#modal');
let modalButton = document.querySelector('#modalButton');
let modalClose = document.querySelector('#modalClose');
let modalCurtain = document.querySelector('#modalCurtain')

modalButton.addEventListener('click',function () {
    modal.classList.add('modal__active');
})
modalClose.addEventListener('click',function () {
    modal.classList.remove('modal__active');

})
modalCurtain.addEventListener('click',function () {
    modal.classList.remove('modal__active');

});
