//encabezado

const imgLogo = document.querySelector('.logo');
imgLogo.src= "img/cc.jpg";

const newNav= document.querySelector('header');
newNav.children[1].innerHTML= `
    <a href="# ">Cartelera</a>
    <a href="# ">Pronto</a>
    <a href="# ">Cine alternativo</a>
    <a href="# ">Comidas</a>`;

const header1= document.querySelector('header');   
header1.children[2].children[0].placeholder="Buscar pelicula"

const parraf= document.querySelector('.ciudad');
parraf.textContent = "Medellin"

//cuerpo 
const contenedor= document.querySelector('.container')
contenedor.children[0].textContent= "Cine Colombia- Peliculas";

contenedor.children[1].children[0].children[0].src= "img/gato.jpg";
contenedor.children[1].children[0].children[1].textContent= "Gato con botas";

contenedor.children[1].children[1].children[0].src= "img/ballena.jpg";
contenedor.children[1].children[1].children[1].textContent= "La Ballena";

contenedor.children[1].children[2].children[0].src= "img/houston.jpg";
contenedor.children[1].children[2].children[1].textContent= "Whitney Houston";

contenedor.children[1].children[3].children[0].src= "img/conejo.jpg";
contenedor.children[1].children[3].children[1].textContent= "Academia de conejos";

const newPelicula= document.createElement('img');
newPelicula.src = "img/radical.jpg";

const newdetalle= document.createElement('p');
newdetalle.textContent= "Radical";

const sectionPeliculaDetalle1= document.createElement('section');
sectionPeliculaDetalle1.classList.add("pelicula_detalle")

sectionPeliculaDetalle1.appendChild(newPelicula);
sectionPeliculaDetalle1.appendChild(newdetalle);

const pelis= document.querySelector(".peliculas");
pelis.appendChild(sectionPeliculaDetalle1);
//....

const newPelicula2= document.createElement('img');
newPelicula2.src = "img/wish.jpg";

const newdetalle2= document.createElement('p');
newdetalle2.textContent= "Wish";

const sectionPeliculaDetalle2= document.createElement('section');
sectionPeliculaDetalle2.classList.add("pelicula_detalle")

sectionPeliculaDetalle2.appendChild(newPelicula2);
sectionPeliculaDetalle2.appendChild(newdetalle2);

const pelis2= document.querySelector(".peliculas");
pelis.appendChild(sectionPeliculaDetalle2);






