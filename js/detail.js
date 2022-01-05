"use strict";


/*---------------------!!  DETAIL JS   !!---------------------*/


"use strict";


/*--------------------- TRANSITIONS A  ---------------------*/

let validation = false;

window.onload = () => {
  const transitionA = document.querySelector(".transition1");
  const Buttons = document.querySelectorAll(".buttonTrans1");

  if (validation==false){
    setTimeout(() => {
      transitionA.classList.remove("is-active");
    }, 500);
     
  }

  Buttons.forEach(button => {
    button.addEventListener('click', function(event) {
      event.preventDefault();
      let target = event.target.href;
      transitionA.classList.add("is-active");
  
      validation = true;
  
      setTimeout(() => {
        window.location.href = target;
      }, 500);
  
    })
  })
}

/*--------------------- MENU APPEARANCE ---------------------*/

const menu = document.getElementById("menuOpen");
const menuListener = document.querySelector("#navBar h2 a");
const menuClose = document.querySelector("#close a"); 
const main = document.querySelector("#snaphere");
const body = document.querySelector("body");


menuListener.addEventListener('click', function(event){
    event.preventDefault();
    if(menu.classList.contains("hiddenOut")){
        menu.classList.replace("hiddenOut", "hidden");
    }  
    menu.classList.replace("hidden", "visible");
    main.classList.add("filterMode");
    //body.classList.add("noOverflow");

  
})

menuClose.addEventListener('click', function(event){
    event.preventDefault();
    menu.classList.replace("visible", "hiddenOut");
    main.classList.remove("filterMode");
    //body.classList.remove("noOverflow");
})

/*--------------------- MENU ANIMATION SCROLL  ---------------------*/

const menuBar = document.querySelector("header");

/*window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
      menuBar.style.top = "-50px";
    } else {
      menuBar.style.top = " 0px";
    }
  }
*/

  var prevScrollpos= window.pageYOffset;
    window.onscroll=function(){
    var currentScrollpos=window.pageYOffset;

    if(prevScrollpos> currentScrollpos){
        menuBar.style.top="0";
    }
    else{
        menuBar.style.top="-100px"
    }
    prevScrollpos=currentScrollpos
    }

/*--------------------- SLIDESHOW   ---------------------*/


const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

});


/*const buttonsSwiper = document.getElementById("test");

buttonsSwiper.addEventListener('click', function(){
  console.log('test');

});*/