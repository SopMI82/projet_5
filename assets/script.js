/** TABLEAU DES DONNEES A INTEGRER */

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

/** VARIABLES */

let index = 0
const nbrSlides = slides.length
const banner = document.getElementById("banner");
const arrowLeft = document.querySelector(".arrow_left");
const arrowRight = document.querySelector(".arrow_right");
const divDots = document.querySelector(".dots");
const slideContent = document.querySelectorAll('.slide');
const dot = document.querySelectorAll('.dot');

/** FONCTIONS */

/**
 * Fonction qui gère la création des elements du slider
 * @param {*} 
 */
const createDiv = () => {
	slides.forEach((slide) => {
		banner.insertAdjacentHTML('beforeEnd',
			`<div class="slide">
			<img class="banner-img" src="./assets/images/slideshow/${slide.image}"
			alt="Banner Print-it">
			<p>${slide.tagLine}</p>
			</div>`);
	})
}

/**
 * Fonction qui gère la création des dots
 * @param {Number} index 
 */
const createDots = (index) => {
	for(let index=0; index<slides.length; index++) {
	divDots.insertAdjacentHTML('afterBegin',`<div class="dot"></div>`);
	}
}

createDiv()
createDots()

/**
 * fonction qui incrémente l'index 
 */
const augmIndex = () => {//je dois lui passer quoi en paramètre ? clickRight ? ou event ?
	if (index > (slides.length - 2)) {
		index = 0;
	} else {
		index = index + 1;
	}
}

/**
 * fonction qui décrémente l'index 
 */
const dimIndex = () => { //je dois lui passer quoi en paramètre ? clickLeft ? ou event ?
	if (index < 1) {
		index = slides.length - 1;
	} else {
		index = index - 1;
	}
}
/**
 * fonction qui enlève les classes au debut du processus
 * @param {Number} index 
 */
const removeClass = (index) => {
	dot[index].classList.remove('dot_selected');
	slideContent[index].classList.remove('slide_selected')	;
}

/**
 * fonction qui ajoute les classes à la fin du processus
 * @param {Number} index 
 */
const addClass = (index) => {
	dot[index].classList.add('dot_selected');
	slideContent[index].classList.add('slide_selected');
}


// a partir de là, je pense que ce que j'ai fait n'est pas bon
const clickLeft = () => {arrowLeft.addEventListener ("click", (event) => {
		dimIndex (left);
		})
	}

const clickRight = () => {arrowRight.addEventListener ("click", (event) => {
		addClass(right);
		})
	}

const défilerCarousel = () => {
	removeClass;
	switch (key) {
		case value:
			
			break;
	
		default:
			break;
	}
	//je ne sais plus comment je dois intégrer les fonctions clickLeft et clickRight, je me souviens que tu as utilisé "case"
	addClass;
}

