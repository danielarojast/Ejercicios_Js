import { deleteCategory } from "./indexCategories.js";
import { descriptionCategory, nameCategory } from "./indexCategories.js";


const categoriesTbody= document.querySelector('#categorias-tbody');
export const idCategoryUpdate= document.querySelector('#idCategoryUpdate');
export const btnAddCategoryModal= document.querySelector('#btnAddCategoryModal');

export function printCategories(categories){

    categoriesTbody.innerHTML= "",

    categories.forEach(category => {
        const tr= document.createElement('tr');
        const tdId= document.createElement('td');
        const tdName= document.createElement('td');
        const tdDescription= document.createElement('td');
        const tdButtons= document.createElement('td');

        const btnEdit= document.createElement('button');
        const btnDelete= document.createElement('button');

        btnEdit.textContent = "Edit"
        btnDelete.textContent = "Delete"
    
        btnEdit.classList.add("btn", "btn-primary");
        btnDelete.classList.add("btn", "btn-danger");

        btnDelete.addEventListener('click', ()=>{
            console.log("Eliminadno");
            deleteCategory(category.id);
        });
        btnEdit.addEventListener('click', ()=>{
            console.log("Editando");
            loadInfoCategory(category);
        });
        
        tdButtons.appendChild(btnEdit);
        tdButtons.appendChild(btnDelete);

        tdId.textContent= category.id;
        tdName.textContent= category.name;
        tdDescription.textContent= category.description;

        tr.appendChild(tdId);
        tr.appendChild(tdName);
        tr.appendChild(tdDescription);
        tr.appendChild(tdButtons);

        categoriesTbody.appendChild(tr);

    });
}

function loadInfoCategory(category){
    nameCategory.value = category.name;
    descriptionCategory.value = category.description;
    idCategoryUpdate.value = category.id;
    btnAddCategoryModal.click();
}