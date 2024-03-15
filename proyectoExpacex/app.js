// Llamar la API 1

    document.addEventListener('DOMContentLoaded', getLanzamiento);
    
    async function getLanzamiento(){
        let urlLanzamiento= 'https://api.spacexdata.com/v3/launches';
        
        try {
            const response = await fetch(urlLanzamiento);
            const data= await response.json();
            console.log(data);
            showLanzaminetos(data)
        } catch (error) {
            console.log(error)
        };
        
    };

    function showLanzaminetos(data){
        
        const contenedor= document.querySelector('#contenedor');
       
        data.forEach(dato => {
            const imagen= dato.links.mission_patch_small;
            const {mission_name, launch_year, flight_number }= dato;
            
            contenedor.innerHTML +=`
            <div class="card"  id="cadaCard" style="width: 18rem;">
                <img src="${imagen}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${mission_name}</h5>
                    <p class="card-text">${launch_year}</p>
                    <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" 
                    name=${mission_name} numFlight=${flight_number} year= ${launch_year}>Ver info - Mision</button>
                </div>
            </div> 
            `;
        });  
    };
    
    // Llamar informacion con API adicional 
    
    const contenedor= document.querySelector('#contenedor');
    contenedor.addEventListener('click', getMision);
    
    async function getMision(mision){
        
        const idflight= mision.target.getAttribute('numFlight');
        const url2= `https://api.spacexdata.com/v3/launches/${idflight}`;
        console.log(idflight);
        console.log(url2);

        try {
            const rta= await fetch(url2);
            const datos= await rta.json();
            console.log(datos);
            showMision(datos);
        } catch (error) {
            console.log(error)
        }
    };

    // Enviar informacion al modal 
    function showMision(datos){

        //destructurar
        const video= datos.links.youtube_id;
        const name= datos.rocket.rocket_name;
        const tipo= datos.rocket.rocket_type;
        const estado= datos.launch_success;
        console.log(video, name, tipo, estado)

        const contenedorModal= document.querySelector('#contenidoModal');

        contenedorModal.innerHTML = `
            <p>Space explortion Tecnologies Corp</p>
            <div>
            <iframe width="465" height="315" src="https://www.youtube.com/embed/${video}" title="YouTube video player" 
            frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
            <div class="tablaModal">
                <table>
                    <thead>
                    <tr>
                        <td>Cohete: </td>
                        <td>${name}</td>
                    </tr>
                    <tr> 
                        <td>Tipo Cohete: </td>
                        <td>${tipo}</td>
                    </tr>
                    <tr>
                        <td>Exito Lanzamineto: </td>
                        <td>${estado}</td>
                    </tr>
                    </thead>
                </table>
            </div>
            
        `
    };

    



    



