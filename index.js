// 1.
let body = document.body;
let title = body.firstElementChild;
title.innerHTML = " Rick Astley - Never Gonna Give You Up.";
// 2.
const coupletElements = document.querySelectorAll('.couplet');
//suppression de la première ligne
for (let i = 0; i < coupletElements.length; i++) {
  coupletElements[i].firstChild.remove();
  coupletElements[i].firstChild.remove("<br>");
}

// 3.
const refrainElements = document.querySelectorAll('.refrain');
refrainElements.forEach((element) => {

  const contenuHTML = element.innerHTML; 
  const refrains = contenuHTML.split("<br>");
  const uniqueline = [];
  refrains.forEach((element2) => {
    if (!uniqueline.includes(element2)) {
      uniqueline.push(element2);
    }
  })
  element.innerHTML = uniqueline.join('<br>');

});
//4.
let erreur = document.getElementById("erreur");
body.removeChild(erreur);
// 5.
let piedPage = "© Copyright 2023 - Hama Fadilatou";
let footer = document.createElement("footer");
footer.innerHTML = piedPage;
body.append(footer);


// Attacher un gestionnaire d'événements à la case à cocher
const masquerRefrainsCheckbox = document.getElementById("masquer-refrains");
masquerRefrainsCheckbox.addEventListener("change", function () {
    // Récupérer tous les éléments de refrain
    const refrains = document.querySelectorAll(".refrain");

    // Vérifier l'état de la case à cocher
    if (masquerRefrainsCheckbox.checked) {
        // Masquer tous les refrains sauf le premier
        for (let i = 1; i < refrains.length; i++) {
            refrains[i].classList.add("hidden");
        }
    } else {
        // Afficher tous les refrains
        refrains.forEach(refrain => {
            refrain.classList.remove("hidden");
        });
    }
});