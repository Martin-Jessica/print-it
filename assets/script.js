/* On crée un tableau (slides) qui contient les chemins ou noms des images à afficher. Chaque élément représente une slide.*/
const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

/* On initialise une variable currentIndex à 0, ce qui veut dire que le slider commence à la première image du tableau (index 0 = slide1.jpg).*/
let currentIndex = 0;

/**** On récupère les éléments slideImg : l’image actuelle (<img>), prevBtn : le bouton flèche gauche, nextBtn : le bouton flèche droite</img>.*****/
const slideImg = document.getElementById("slide1");
const prevBtn = document.getElementById("arrow_left");
const nextBtn = document.getElementById("arrow_right");


/* Fonction showSlide(index) : Elle change la source de l’image (slideImg.src) pour afficher une autre image du tableau slides[].Par exemple, showSlide(3) affichera slide4.jpg.*/
function showSlide(index) {
  slideImg.src = slides[index];
}


/* Quand on clique sur le bouton gauche :currentIndex - 1 : on recule d’une image.+ slides.length : on évite les index négatifs.% slides.length : permet de revenir à la fin du tableau si on est au début (cercle infini).showSlide(currentIndex) : on affiche la nouvelle image.*/
prevBtn.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  showSlide(currentIndex);
});

/*Quand on clique sur le bouton droite :currentIndex + 1 : on avance d’une image.% slides.length : si on est à la fin, on revient au début.showSlide(currentIndex) : on affiche la nouvelle image.*/
nextBtn.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % slides.length;
  showSlide(currentIndex);
});