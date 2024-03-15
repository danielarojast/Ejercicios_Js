const buscador = document.querySelector('#buscador');
buscador.addEventListener('input', getDataPelis);

document.addEventListener('DOMContentLoaded', getDataPelis);

function getDataPelis(){
    const peliBuscada= buscador.value
    let urlPelucilas
    if( peliBuscada==""){
        urlPelucilas= `http://www.omdbapi.com/?apikey=1439b6a&s=batman`;
    }else{
        urlPelucilas= `http://www.omdbapi.com/?apikey=1439b6a&s=${peliBuscada}`;
    }
  
    fetch(urlPelucilas)
    .then(rtaPelis =>{
        console.log(rtaPelis);
        return rtaPelis.json();
    })
    .then(datosPelis=>{
        console.log(datosPelis.Search);
        showPelis(datosPelis.Search);
    });
}

function showPelis(peliculas){
    const contPeliculas= document.querySelector('#contenedorPeliculas');
    let html="";

    peliculas.forEach(pelicula => {
        const {Title, Year, Poster, Type}= pelicula;
        html += `
            <div id=cadaPeli>
                    <img src=" ${Poster}" width= "250px">
                <div class="infoPeli">
                    <b> ${Title}</b>
                    <p> ${Year}</p>
                    <a href="#">${Type} </a href="# ">
                </div>
                
            </div>
        `;
    });
    contPeliculas.innerHTML=html;
};
