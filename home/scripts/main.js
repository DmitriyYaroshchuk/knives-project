$(function(){
    $('.description').slick({
        dots:true,
        prevArrow: '<button type="button" class="slick-prev"><img src="home/image/previous__arrow.svg"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="home/image/next__arrow.svg"></button>'
    });
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

})
