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