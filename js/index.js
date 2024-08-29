const toggleBurger = document.querySelector('.burger');
const nav = document.querySelector('.header__nav');

toggleBurger.addEventListener('click', function(){
   toggleBurger.classList.toggle('active');
   nav.classList.toggle('active');
});

function getMyFunction(){
   alert("Hi!")
}