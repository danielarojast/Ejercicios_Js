import{get, post} from "../../api/clientHttp.js"
import{url_Categories, url_News} from "../../api/URL.js"

//Selectores

const formNews = document.querySelector('#formNews');
const nameNotice = document.querySelector('#nameNotice');
const urlImage = document.querySelector('#urlImage');
const idCategory = document.querySelector('#idCategory');
const contentNotice = document.querySelector('#contentNotice');
const btnOpenModalNews = document.querySelector('#btnOpenModalNews');

//eventos

document.addEventListener('DOMContentLoaded', ()=>{
    loadCategories();
    getNews();
})

//funcion para llenar las categorias en el formulario GET
async function loadCategories(){
    const categories = await get(url_Categories);
    console.log(categories)
    categories.forEach(category => {
        const option = document.createElement("option");

        option.textContent= category.name;
        option.value = category.id;

        idCategory.appendChild(option);
    });
}


// crear una nueva noticia POST 
formNews.addEventListener('submit', (e)=>{
    e.preventDefault();

    createNew()
})

async function createNew(){

    const user= JSON.parse(localStorage.getItem("user"));

    if(!idCategory.value){
        console.error("La categoria es obligatoria");
        return ;
    }

    const newNotice= {
        name: nameNotice.value,
        image: urlImage.value,
        categoryId: idCategory.value,
        content:  contentNotice.value,
        userId: user.id,
        publicationDate: new Date(). toISOString("T")[0]
    };

    await post(url_News, newNotice);
};

//Listar las categorias GET 

async function getNews(){
    const news= await get(`${url_News}?_embed=category&_embed=user`);
    console.log(news);


}
