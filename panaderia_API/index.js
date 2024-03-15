
document.addEventListener('DOMContentLoaded', getPlatos);


function getPlatos(){
  
    let urlPlatos= 'https://www.themealdb.com/api/json/v1/1/categories.php';
    
    fetch(urlPlatos)
    .then(rtaPlatos =>{
        console.log(rtaPlatos);
        return rtaPlatos.json();
    })
    .then(datosPlatos =>{
    
        listPlatos(datosPlatos.categories);
        console.log(datosPlatos.categories);
    });
};

// Funcion que Trae la lista de las categorias como opcion del select
   
    function listPlatos(categorias){

        categorias.forEach((category)=>{
            const {strCategory}= category;
    
            const opcion= document.createElement('option')
            opcion.value=strCategory;
            opcion.textContent=strCategory;
        
            const opciones= document.querySelector('#opciones')
            opciones.appendChild(opcion);
        });
    }
//

const opciones= document.querySelector('#opciones')
opciones.addEventListener('input', getFiltroPlatos);

//document.addEventListener('DOMContentLoaded', getPlatos);

// funcion que me muestra las cards 
function getFiltroPlatos(){

    option = opciones.value
    
    let url= `https://www.themealdb.com/api/json/v1/1/filter.php?c=${option}`;

    fetch(url)
    .then(respuesta => {
        console.log(respuesta)
        return respuesta.json();
        
    })
    .then(datos => {
        console.log(datos.meals)
        showPlatos(datos.meals);
    })
    
};

function showPlatos(foods){
    const contenedor= document.querySelector('#contenedor');
    let html= "";

    foods.forEach(food => {
        const {strMeal, strMealThumb}= food;
        html += `
            <div id=cadaPlato>
                    <img src=" ${strMealThumb}" width= "250px">
                <div class="infoPeli">
                    <a><b> ${strMeal}</b></a>
                </div>
                
            </div>
        `;    
    });

    contenedor.innerHTML=html;
};

