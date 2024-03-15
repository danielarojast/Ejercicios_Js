 //va de la mano con TRY CATCH

/* console.log(3);

try {
    imprimir();
} catch (e) {

} */

console.log(5);

// FETCH Api con Async Await: 
    // Se pone el Await cuando hay que esperar que algo mas se ejecute antes. 

const url= "https://www.themealdb.com/api/json/v1/1/categories.php";

document.addEventListener("DOMContentLoaded", getData);
//fetch basico

    /* function getData() {
        fetch(url)
        .then(rsta=>{
            console.log(rsta)
            return rsta.json();
        })
        .then(datos=>{
            console.log(datos.categories);
            showData(datos.categories);
        });
    }; */

// fecth con Async Await


    async function getData(){
        try {
            const response= await fetch(url);
            const datos= await response.json();
            console.log(datos.categories);
        } catch (error) {
            console.log(error);
        }
        
    }



