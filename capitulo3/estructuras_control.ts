let edad:number=35;
if(edad%2==0){
    console.log(`${edad} es par`)
} else {
    console.log(`${edad} es impar`)
}

console.log(".-.-.-.-.-.-.-.-.-.-.-.-.");

//Aplicacion de cantidad de dias que tiene un mes

let mes:string="marzo";


switch(mes){

    case "enero" : case "marzo" : case "mayo" :
        console.log(`${mes} tiene 31 días`);
        break;

        case "abril" : case "junio" :
            console.log(`${mes} tiene 30 días`)
            break

            case "febrero" : 
                console.log(`${mes} tiene 28 y cada 4 años tiene 29`)
                break

                default:
                    console.log(`${mes} no existe`)
}



