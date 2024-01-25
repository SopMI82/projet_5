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

//récupération des données depuis le tableau :
slides.forEach((slide) => {
	banner.insertAdjacentHTML('beforeEnd',
		`<div class="slide">
		<img class="banner-img" src="./assets/images/slideshow/${slide.image}"
		alt="Banner Print-it">
		<p>${slide.tagLine}</p>
		</div>` )
	//maintenant toutes mes slides sont positionnées les unes sur les autres, avec un décallage.
	//je vais essayer de masquer les slides par défaut dans le code HTML inséré plus tot, pour les afficher uniquement au clic.
	// finalement, j'ai mis une opacité à 0 dans le code html, je vais la modifier ici pour la slide active
	//selection de la div slide active :
})




//le contenu de chaque slide :
let slideContent = document.querySelectorAll('.slide')
console.log(slideContent);
//donne une liste vide à ce niveau car l'objet n'est pas encore créé


/* //image à actualiser :
const bannerImg = document.querySelector(".banner-img")
console.log(bannerImg)
//pas utile si <img> générée par le JS ?

// paragraphe à modifier :
const bannerTxt = document.querySelector("p");
console.log(bannerTxt)
//pas utile si <p></p> généré par le JS */

//Initialisation du compteur :
let index = 0

/* let imageSource = slides.slide[index].image
console.log(imageSource); */ 
//idée à suivre, mais ne fonctionne pas tel que



// SOUMETTRE les éléments à une action :

//créer les dots, grace à une boucle :
for(let i=0; i<slides.length; i++) {
<<<<<<< Updated upstream
	divDots.insertAdjacentHTML('afterbegin',`<div class="dot"></div>`)
=======
	divDots.insertAdjacentHTML('afterBegin',`<div class="dot"></div>`)
>>>>>>> Stashed changes
	//ajouter le dot qui vient d'être crée au tableau, pour l'item[i] ?
}

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
	if (index<1) {
		index=slides.length-1
	} else {
		index = index -1
	}	
	console.log(index); // vérifier

//j'avais pensé incorporer le lien de l'image ainsi, mais ça ne fonctionne pas :
/* 	bannerImg.setAttribute('src', imgSource) */ 
})

// écouter le clic sur la flèche gauche :
arrowRight.addEventListener ("click", (right) => {
	console.log("click right OK"); // vérifier
// action à effectuer au clic, avec une condition pour faire boucler les slides :
	if (index > (slides.length-2)) {
		index = 0
	} else {
		index = index + 1
	}
	console.log(index); // vérifier

	
})







//Brouillons :

	/* const img = `<img class="banner-img" src="./assets/images/slideshow/${slide.image}" alt="Banner Print-it">`
	const tag = `<p>${slide.tagLine}</p>` */
/* 	console.log(img); // vérifier
	console.log(tag); // vérifier */

//insertion des images et des paragraphes dans le code HTML :
//banner.insertAdjacentHTML("afterbegin", img);
//banner.insertAdjacentHTML("afterbegin", tag);

//je cherche comment masquer les images et paragraphes qui ne correspondent pas au nuléro de l'index en leur ajoutant la propriété css display none
/* if (slide != index) {
		bannerImg.style.display = 'none'
	}
}) */

//le mieux serait surement d'afficher uniquement l'image et le paragraphes de la slide correspondant à l'index