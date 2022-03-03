//switch... condicional multiple

//nos permite tomar muchas deciciones en funcion al valor de algo


//Funcionamiento basico de SWITCH

let mes = 5;

switch(mes){

    case 1:
        console.log("enero");
        break;

    case 2:
        console.log("febrero");
        break;

    case 3:
        console.log("marzo");
        break;

    default:
        console.log("otra cosa");

}

//dentro del case se pueden poner codigo

let diaActual = 7;

switch(diaActual){

    case ( 10 > 5 )? 7:1  :
        console.log("lunes");
        break;

    case 2:
        console.log("martes");
        break;

    default:
        console.log("otra cosa");

}