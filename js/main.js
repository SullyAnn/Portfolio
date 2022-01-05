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

window.onscroll = function() {scrollFunction()};

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

/*--------------------- SIDE NAVIGATION ANIMATION SCROLL  ---------------------*/

/*---- APPARITION HOVER -----*/
const sideBar = document.getElementById("sideNav");
const projects = document.getElementById("projects");

projects.addEventListener("mouseenter",function(){
  sideBar.classList.replace("hiddenNav","visibleNav");

})

projects.addEventListener("mouseleave", function(){
  sideBar.classList.replace("visibleNav", "hiddenNav");
})

/*-------------------- CHANGE CURRENT COLOR MENU ----------------------*/


const Link_BackEnd = document.getElementById("Link_BackEnd");
const Link_HP = document.getElementById("Link_HP");
const Link_Hyper = document.getElementById("Link_Hyper");
const Link_Veggie = document.getElementById("Link_Veggie");
const Link_Cim = document.getElementById("Link_Cim");
const Link_Foot = document.getElementById("Link_Foot");


const arrayLink = [Link_BackEnd, Link_HP, Link_Hyper, Link_Veggie, Link_Cim, Link_Foot];

const Projet_BackEnd = document.getElementById("Projet_BackEnd");
const Projet_HP = document.getElementById("Projet_HP");
const Projet_Hyper = document.getElementById("Projet_Hyper");
const Projet_Veggie = document.getElementById("Projet_Veggie");
const Projet_Cimetiere = document.getElementById("Projet_Cimetiere");
const Projet_Foot = document.getElementById("Projet_Foot");



function changeColorMenu(indiceTab, array){
  
  for(let i=0; i<array.length; i++){
    array[i].classList.remove("currentMenu");
    array[i].classList.add("basicMenu");
  }


  //array[indiceTab].classList.remove("basicMenu");
  array[indiceTab].classList.add("currentMenu");

}

window.addEventListener('scroll', function () {
  let yScroll = window.pageYOffset +1;

  if(yScroll > Projet_BackEnd.offsetTop && yScroll < Projet_HP.offsetTop){
    changeColorMenu(0,arrayLink);
  }
  else if(yScroll > Projet_HP.offsetTop && yScroll < Projet_Hyper.offsetTop){
    changeColorMenu(1,arrayLink);
  }
  else if(yScroll > Projet_Hyper.offsetTop && yScroll < Projet_Veggie.offsetTop){
    changeColorMenu(2,arrayLink);
  }
  else if(yScroll > Projet_Veggie.offsetTop && yScroll < Projet_Cimetiere.offsetTop){
    changeColorMenu(3,arrayLink);
  }
  else if(yScroll > Projet_Cimetiere.offsetTop && yScroll < Projet_Foot.offsetTop){
    changeColorMenu(4,arrayLink);
  }
  else if(yScroll > Projet_Foot.offsetTop){
    changeColorMenu(5,arrayLink);
  }


  // the page was scrolled (horizontally or vertically)
});


/*--------------------- ARROW DOWN APPARITION   ---------------------*/
const arrowDown = document.querySelector(".material-icons");

setTimeout(() => {
  arrowDown.classList.add("animEnter")
}, 3000);

