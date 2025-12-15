// declaration des variables 
const  btnOpenAbonne =  document.querySelector('.abonnement-btn');
const blockFlottant = document.querySelector(".flottant-box");
const AbonneBox = document.querySelector(".abonnement-box");
const BtncloseAbonne = document.querySelector(".btn-close");
const styleBody = document.querySelector("body")

btnOpenAbonne.addEventListener("click", (e) =>{
    e.preventDefault();
    e.stopPropagation();
    blockFlottant.classList.add("active")
    AbonneBox.classList.add("active")
    styleBody.classList.add("active")
})

BtncloseAbonne.addEventListener("click",() =>{
   
   blockFlottant.classList.remove("active")
   AbonneBox.classList.remove("active")
   styleBody.classList.remove("active")
})

// ------------------------------------------------
//  la partie de la navbar 

const MenuNavigation = document.querySelector(".navbar-menu")
const MenuButton =  document.querySelector('.button-navigation')
const NavLinks =  document.querySelector('.navlinks')
const NavLinksItems =  document.querySelector('.navlinks li a')

document.addEventListener("scroll", () =>{
    if( window.scrollY > 50){
       MenuNavigation.classList.add('active')
    }
    else{
        MenuNavigation.classList.remove("active")
    }
})

MenuButton.addEventListener("click", () =>{
    MenuButton.classList.toggle("active")
    NavLinks.classList.toggle('active')
    styleBody.classList.toggle('active')
    NavLinksItems.classList.add('active')
})