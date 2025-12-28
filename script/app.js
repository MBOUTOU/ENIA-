// declaration des variables 
const btnOpenAbonne =  document.querySelector('.abonnement-btn');
const blockFlottant = document.querySelector(".flottant-box");
const AbonneBox = document.querySelector(".abonnement-box");
const BtncloseAbonne = document.querySelector(".btn-close");
const styleBody = document.querySelector("body")

btnOpenAbonne.addEventListener("click", (e) =>{
    e.preventDefault();
    e.stopPropagation();
    blockFlottant.classList.add("active")
    AbonneBox.classList.add("active")
})

BtncloseAbonne.addEventListener("click",() =>{
   
   blockFlottant.classList.remove("active")
   AbonneBox.classList.remove("active")
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

// la partie du boutonde whatsapp 

const WhatsappBtn = document.querySelector(".whatsapp-btn");
  WhatsappBtn.addEventListener("click", () =>{
     const WhatsappNumber = "242068718977"
     const WhatsappMessage = "Bonjour ENIA, je souhaite avoir plus d'informations sur vos programmes."
     const encodedMessage = encodeURIComponent(WhatsappMessage); 
     const url = `https://wa.me/${WhatsappNumber}?text=${encodedMessage}`;
     window.open(url, "_blank"); 
})