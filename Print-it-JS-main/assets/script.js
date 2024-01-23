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

//nombre de slides dans mon tableau :
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

//image à actualiser :
const imgCarousel = document.querySelector(".banner-img")
console.log(imgCarousel)
//pas utile si <img> générée par le JS


// paragraphe à modifier :
const tagLine = document.querySelector("p");
console.log(tagLine)
//pas utile si <p></p> généré par le JS

//Initialisation du compteur :
let index = 0

/* let imageSource = slides.slide[index].image
console.log(imageSource); */ 
//idée à suivre, mais ne fonctionne pas tel que



// SOUMETTRE les éléments à une action :


/* Gestion des evenements sur les Flèches */

// écouter le clic sur la flèche gauche :
arrowLeft.addEventListener ("click", () => {
	console.log("click left OK"); // vérifier
	// action à effectuer au clic, avec une condition pour faire boucler les slides :
	if (index<1) {
		index=slides.length-1
	} else {
		index = index -1
	}	
	console.log(index); // vérifier

//j'avais pensé incorporer le lien de l'image ainsi, mais ça ne fonctionne pas :
/* 	imgCarousel.setAttribute('src', imgSource) */ 
})

// écouter le clic sur la flèche gauche :
arrowRight.addEventListener ("click", () => {
	console.log("click right OK"); // vérifier
// action à effectuer au clic, avec une condition pour faire boucler les slides :
	if (index > (slides.length-2)) {
		index = 0
	} else {
		index = index + 1
	}
	console.log(index); // vérifier
	
})

//gestion de l'implémentation du contenu à positionner en dehors ?


//récupération des données depuis le tableau :
slides.forEach((slide) => {
	const img = `<img class="banner-img" src="./assets/images/slideshow/${slide.image}" alt="Banner Print-it">`
	const tag = `<p>${slide.tagLine}</p>`
	console.log(img); // vérifier
	console.log(tag); // vérifier

//insertion des images et des paragraphes dans le code HTML :
banner.insertAdjacentHTML("afterbegin", img);
banner.insertAdjacentHTML("afterbegin", tag);

//je cherche comment masquer les images et paragraphes qui ne correspondent pas au nuléro de l'index en leur ajoutant la propriété css display none
if (slide != index) {
		imgCarousel.style.display = 'none'
	}
})

//le mieux serait surement d'afficher uniquement l'image et le paragraphes de la slide correspondant à l'index