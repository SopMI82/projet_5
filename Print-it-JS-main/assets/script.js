/* Données fournies (tableau contenu du carousel) */

const slides = [
	{
		image:"slide1.jpg",
		tagLine:"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		image:"slide2.jpg",
		tagLine:"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		image:"slide3.jpg",
		tagLine:"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		image:"slide4.png",
		tagLine:"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

// SELECTION & STOCKAGE des éléments :

//nombre de slides dans mon tableau (= nombre de bullet points) :
const nbrSlides = slides.length
console.log(nbrSlides); // vérifier

//bannière (=carousel)
const banner = document.getElementById("banner")
console.log(banner); // vérifier

//flèche gauche :
let arrowLeft = document.querySelector(".arrow_left")
console.log(arrowLeft); // vérifier

//flèche droite :
let arrowRight = document.querySelector(".arrow_right")
console.log(arrowRight); // vérifier

//la div qui doit contenir les bullet points :
let divDots = document.querySelector(".dots")
console.log(divDots);


//récupération des données depuis le tableau pour créer 4 divs contenant chacune une photo et un paragraphe :
slides.forEach((slide) => {
	banner.insertAdjacentHTML('beforeEnd',
		`<div class="slide">
		<img class="banner-img" src="./assets/images/slideshow/${slide.image}"
		alt="Banner Print-it">
		<p>${slide.tagLine}</p>
})

//le contenu de chaque slide :
let slideContent = document.querySelectorAll('.slide')
console.log(slideContent);

//Initialisation du compteur :
let index = 0

//créer les dots, grace à une boucle :
for(let i=0; i<slides.length; i++) {
	divDots.insertAdjacentHTML('afterBegin',`<div class="dot"></div>`)
	//ajouter le dot qui vient d'être crée au tableau, pour l'item[i] ?
})
//selectionner les bullet points :
const dot = document.querySelectorAll('.dot')
console.log(dot);


//Initialiser contenu et dots :

//indiquer un index 0 pour le premier bullet point :
dot[0].classList.add('dot_selected')

//indiquer un index 0 pour la première div contenu :
slideContent[0].classList.add('slide_selected')

//Créer les evenements :

//créer les dots, grace à une boucle :
  for(let i=0; i<slides.length; i++) {
	divDots.insertAdjacentHTML('afterBegin',`<div class="dot"></div>`)

//selectionner les bullet points :
const dot = document.querySelectorAll('.dot')
console.log(dot);
//donne une liste vide à ce niveau car l'objet n'est pas encore créé

//indiquer un index 0 pour le premier bullet point :
dot[0].classList.add('dot_selected')

//indiquer un index 0 pour la première div contenu :
slideContent[0].classList.add('slide_selected')


// écouter le clic sur la flèche gauche :
arrowLeft.addEventListener ("click", (left) => {
	console.log("click left OK"); // vérifier
	// action à effectuer au clic, avec une condition pour faire boucler les slides :
	dot[index].classList.remove('dot_selected')
	slideContent[index].classList.remove('slide_selected')
	if (index<1) {
		index=slides.length-1
	} else {
		index = index -1
	}	
	console.log(index); // vérifier
	dot[index].classList.add('dot_selected')
	slideContent[index].classList.add('slide_selected')
})

// écouter le clic sur la flèche gauche :
arrowRight.addEventListener ("click", (right) => {
	console.log("click right OK"); // vérifier
// action à effectuer au clic, avec une condition pour faire boucler les slides :
	dot[index].classList.remove('dot_selected')
	slideContent[index].classList.remove('slide_selected')
	if (index > (slides.length-2)) {
		index = 0
	} else {
		index = index + 1
	}

	console.log(index); // vérifier	
	dot[index].classList.add('dot_selected')
	slideContent[index].classList.add('slide_selected')
})
