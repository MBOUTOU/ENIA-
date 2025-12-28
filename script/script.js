// ce fichier est reservé pour tout ce qui concerne les animations 
const sr = ScrollReveal({
     delay: 150,
     distance: '90px',
      scale: 0.90,
});

sr.reveal(".texte-header", {
    duration: 900,
    distance: '60px',
   
})

sr.reveal(".information .inofs img", {
    duration: 1500,
    origin: 'bottom',
})

sr.reveal(".card-bourse", { 
    duration: 1500,
    interval: 100,
})

sr.reveal(".card-filiere", {
    duration: 1500,
    interval: 100,
})













