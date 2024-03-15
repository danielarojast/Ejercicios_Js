import { url_Categories } from "../../api/URL.js";
import{deleteHttp, post, update} from "../../api/clientHttp.js"
import{get} from "../../api/clientHttp.js"
import { idCategoryUpdate, printCategories } from "./functionsDOM.js";

//Selectores
const formCategories= document.querySelector('#formCategories');
export const nameCategory= document.querySelector('#nameCategory');
export const descriptionCategory= document.querySelector('#descriptionCategory');


//Eventos
formCategories.addEventListener('submit', (e)=>{
    e.preventDefault();
   if(idCategoryUpdate.value){
        upDateCategory(idCategoryUpdate.value)
   }else{
        createCategory();
   }
    
})

document.addEventListener('DOMContentLoaded', () =>{
    getCategories();
})

//....para crear categoria
async function createCategory(){
    const newCategory= {
        name: nameCategory.value,
        description: descriptionCategory.value
    };

    await post(url_Categories, newCategory);
}

//... para listar las categorias (llamarlas) 

async function getCategories(){
    const data= await get(url_Categories);

    printCategories(data);
}

//... Eliminar 
export async function deleteCategory(id){
    console.log("Eliminando id: ", id);

    await deleteHttp(`${url_Categories}/${id}`);
}

//.... Editar 

export async function upDateCategory(id){

    const categoryUpdate= {
        name: nameCategory.value,
        description: descriptionCategory.value
    }
    await update(url_Categories, categoryUpdate);
}



