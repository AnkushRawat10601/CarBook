
const navE1 = document.querySelector('.navbar');

window.addEventListner('scroll' ,() => {
    if (window.scrollY >=56){
      navE1.classList.add('navbar-scroll');
    }

});
