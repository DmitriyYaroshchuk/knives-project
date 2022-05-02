new Swiper ('.map__location',{

    direction: 'vertical',

    freeMode: true,

    slidesPerView: 4,

    slidesPerGroup: 1,

    spaceBetween: 30,

    scrollbar: {
        el:'.swiper-scrollbar',
        draggable: true
    },

    mousewheel: {
        sensitivity: 1,
    }


});
new Swiper ('.map__location-tablet',{

       freeMode: true,

       slidesPerView: 2,

       slidesPerGroup: 1,

       scrollbar: {
           el:'.swiper-scrollbar',
           draggable: true
       },

       mousewheel: {
           sensitivity: 1,
       },

       breakpoints: {
            320: {
               slidesPerView: 1,
               slidesPerGroup: 1,
               spaceBetween: 1,
               freeMode: true,
            },
            770: {
                freeMode: true,
                slidesPerView: 2,
                slidesPerGroup: 1,
                spaceBetween: 78,
            }

       },


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