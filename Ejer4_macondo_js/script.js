/* TALLER MACONDO */
/* Caso 1 */

    let billetera = 2500000;
    billetera = parseInt(billetera)
    let dias= 0;
    let isValid;
    let opciones;

    do{
        opciones= prompt (`Escoge un opcion: 
        1. comprar almojabana con gaseosa: $15.000
        2. Comprar un sbway con gaseosa: $23.000
        3. No comprar nada.`);
        isValid= !isNaN(opciones) && opciones>=1 && opciones<=3;
    }while(!isValid);

    switch (opciones){
        case "1":
            billetera -= 15000
            console.warn("Empezamos mal, esta comida te callo pesada");
            console.log(`billetera: ${billetera}`)
            break
        case "2": 
            billetera -= 23000
            console.log("Que buena eleccion.")
            console.log(`billetera: ${billetera}`)
            break
        case "3": 
            console.warn("Debes comprar algo en Medellin")
            break
        default: 
            console.log("Opcion incorrecta")
            console.log(`billetera: ${billetera}`)
            break
    }

/* Caso 2 */

    const altoPermitido= 55;
    const largoPermitido= 40;
    const anchoPermitido= 20;

    const altoOriginal= 60;
    const largoOriginal= 40;
    const anchoOriginal= 20; 

    let FacReduccionAlto= altoPermitido / altoOriginal;
    let facReduccionLargo= largoPermitido / largoOriginal;
    let facReduccionAncho= anchoPermitido / anchoOriginal; 

    let factorReduccion= Math.min(FacReduccionAlto, facReduccionLargo, facReduccionAncho)

    console.log(`El Factor de reduccion seleccionado es: ${factorReduccion}`)

    const nuevoAlto= altoOriginal * factorReduccion
    const nuevoLargo = largoOriginal * factorReduccion
    const nuevoAncho= anchoOriginal * factorReduccion

    console.log(`nuevo alto= ${nuevoAlto}, nuevo largo= ${nuevoLargo}, nuevo ancho= ${nuevoAncho}`)

/* Caso 3 */

    let ElPassEs= "01110010_01101001_01110111_01101001";

    let passDiv= ElPassEs.split("_");
    //console.log(passDiv)

    let cont;
    let sum;
    let passNueva= [];

    for(let i of passDiv){

        cont= 0;
        sum= 0;

        for(let j= i.length -1; j>= 0; j--){
            sum += i[j] * (2**(cont));
            cont ++
            //console.log(sum)
        }

        passNueva.push(sum)
        //console.log(`Nueva contraseña : ${passNueva}`)
    }

    console.log(`La contraseña del wifi es: ${passNueva[0]}_ ${passNueva[1]}_ ${passNueva[2]}_ ${passNueva[3]} `)

    do{
        horasWifi= prompt("Cuantas horas utiliza el wifi: ")
        isValid= isNaN && horasWifi> 0;
    }while(!isValid);

    Number.parseInt(horasWifi);
    billetera -= (50000*horasWifi);

    console.log(`billetera: ${billetera}`);

/* Caso 4 */

    let conver= prompt("Escribe que le quieres decir al taxista: ");
    let converTraduc= conver.replaceAll("a","i").replaceAll("e","i").replaceAll("o","i").replaceAll("au","i");
    console.log(`Esta es la traduccion: ${converTraduc}`);

/* Caso 5 */

    console.log("Es hora de negociar con el taxista para ver cuanto le debe de pagar.")

    console.log(`Hay 3 opciones: 1. Hildebrando gana. 2.El taxista gana 3.Hay empate entonces juegan de nuevo. EMPECEMOS: `)

    let opciones2 = 3;
    
    while(opciones2 == 3){
        opciones2 = Math.ceil(Math.random()*3)
        console.log(opciones2)

        switch(opciones2){
            case 1:
                console.log(`Ganaste no debes de pagar nada. -- billeter: ${billetera}`);
                break
            case 2:
                console.log(`Perdiste debes de pagar $300.000 al taxita`);
                billetera -= 300000;
                console.log(`Billetera: ${billetera}`);
                break
            default:
                console.log("Vuelve a jugar");  
                break
        }
    }

/* Caso 6 */

    let opciones3; 
    let opc;
    let opc1;
    let opc2; 
    let opc3;
    let opc4;
    let estado = "vivo";
    let day = 0;

    for(let k= 1; k<= 4; k++){
        day++
        console.log(`Dia: ${k}`);
        do{
            opciones3 = prompt(`¿Que quieres hacer el dia de hoy?, escoje un color:  
            1. Amarillo: piscina
            2. verde: caminata
            3. rojo: actividades en la playa
            4. azul: actividades en el hotel.`);

            isValid= !isNaN(opciones3) && opciones3>=1 && opciones3 <= 4;
        }while(!isValid);

        switch (opciones3){
            case "1": 
                
                opc= prompt(`El agua huele raro ¿te quieres meter: 
                1. si
                2. no`);
                
                if(opc == "1"){
                    console.log("¡¡¡¡¡ MURIO !!!!!")
                    estado = "muerto"
                    break;
                }else{
                    console.log("OK es mejor que no te metas hoy.")
                    break;
                }
            case "2":
                
                opc1= prompt(`Vas a estar en toda la caminata:
                1. si
                2. no`);
                 
                if(opc1 == "1"){
                    console.log("Genial, que lindas fotos");
                    break;
                }else{
                    console.log("Te perdiste, que mal dia");
                    break;
                }
            case "3":
                
                opc2= prompt(`Hay mucho que hacer en la playa, escoje una opcion: 
                1. Jugar voleibol
                2. nadar y montar moto
                3. Tomar cocteles `); 
            
                if(opc2 == 1 || opc2 == 2){
                    console.log("un dia genial");
                    break;
                }else{
                    console.log(`Ho no, el licor esta adulterado, se acabo el viaje`);
                    break;
                }
            case "4": 
                    
                opc3= prompt(`Hay varias actividades dentro del hotel, escoje una: 
                1. Jugar bingo
                2. Bailar
                3. Ir al casino. `);
                
                if(opc3 == 1){
                    console.log("Eres un ganador");
                    let ganancia= prompt("Cuanto ganaste: $")
                    ganancia = parseInt(ganancia)
                    billetera += ganancia
                    console.log(`Billetera: ${billetera}`)
                    break;
                }else
                    if(opc3 == 2){
                        console.log(`Que dia tan divertido`);
                        break;
                    }else{
                        console.log("Perdiste todo el dinero, solo tienes $100.00 para los pasajes de vuelta");
                        billetera= 100000;
                        console.log(`Billetera: ${billetera}`);
                        break;
                    }
        }
        if(opc == "1" || opc2 == "3" || opc3 == "3" ){
            break
        }
    }

if(opc=="1"){
    console.log(`Hidelbrando estubo en Macondo ${day} dias.`)
    console.log(`El volvio ${estado} de sus vaciones.`)
    console.log(`Llego con un saldo en su billetera de $${billetera}.`)
}else{
    if(opc3 =="3"){
        console.log("Se acabo el viajes y se gasto $100.000 adicionales para el pasaje de vuelta")
        billetera = 0
        console.log(`Hidelbrando estubo en Macondo ${day} dias.`)
        console.log(`El volvio ${estado} de sus vaciones.`)
        console.log(`Llego con un saldo en su billetera de $${billetera}.`)
    }else{
        console.log("Se acabo el viajes y se gasto $100.000 adicionales para el pasaje de vuelta")
        billetera -= 100000
        console.log(`Hidelbrando estubo en Macondo ${day} dias.`)
        console.log(`El volvio ${estado} de sus vaciones.`)
        console.log(`Llego con un saldo en su billetera de $${billetera}.`)}
    }


