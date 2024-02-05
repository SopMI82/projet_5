/* Données fournies (tableau contenu du carousel) */
const slides = [
	{
		image: "slide1.jpg",
		tagLine: "Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		image: "slide2.jpg",
		tagLine: "Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		image: "slide3.jpg",
		tagLine: "Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		image: "slide4.png",
		tagLine: "Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

/** VARIABLES */
let index = 0
const nbrSlides = slides.length
const banner = document.getElementById("banner");
const arrows = document.querySelectorAll(".arrow");
const divDots = document.querySelector(".dots");

/**
 * Création d'une slide pour chaque élément du tableau
 */
slides.forEach((slide) => {
	banner.insertAdjacentHTML('beforeEnd',
		`<div class="slide">
		<img class="banner-img" src="./assets/images/slideshow/${slide.image}"
		alt="Banner Print-it">
		<p>${slide.tagLine}</p>
		</div>`)
})
const slideContent = document.querySelectorAll('.slide');

/**
 * Création d'un dot pour chaque élément du tableau
 */
for (let i = 0; i < slides.length; i++) {
	divDots.insertAdjacentHTML('afterBegin', `<div class="dot"></div>`)
}
const dot = document.querySelectorAll('.dot');

/**
 * Fonction qui gère l'ajout de la classe "selected"
 */
function addClass() {
	dot[index].classList.add('dot_selected');
	slideContent[index].classList.add('slide_selected');
}

/**
 * Fonction qui gère le retrait de la classe "selected"
 */
function removeClass() {
	dot[index].classList.remove('dot_selected');
	slideContent[index].classList.remove('slide_selected');
}

/**
 * Fonction qui retire 1 à l'index
 */
function decIndex() {
	if (index < 1) {
		index = slides.length - 1
	} else {
		index = index - 1
	}
}

/**
 * Fonction qui ajoute 1 à l'index
 */
function augIndex() {
	if (index > (slides.length - 2)) {
		index = 0
	} else {
		index = index + 1
	}
}
/**
 * Initialisation du carousel 
 */
addClass()

/**
 * Fonction qui gère le carousel
 */
arrows.forEach(arrow => {
	arrow.addEventListener('click', event => {
		removeClass()
		switch (event.target.classList[1]) {
			case 'arrow_left':
				decIndex()
				break;
			case 'arrow_right':
				augIndex()
				break;
		}
		addClass()
	})
})
