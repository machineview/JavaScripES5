//POLIMORFISMO EN JAVASCRIPT
/*
Supongamos que tenemos una funcion que necesita saber
que tipo de dato es para realizar algo
*/

function determinaDato(a){

    if (a === undefined){
        console.log("A es undefined .. no se que hacer");
    }
    if( typeof a === "number"){
        console.log("A es un numero");
    }
    if( typeof a === "string"){
        console.log("A es un texto");
    }
    if( typeof a === "object"){
        console.log("A es un objeto");
        if (a instanceof Number){
            console.log("A es un objeto numerico");
        }
    }

}


//ejemplo de un numero que es un objeto

let b = new Number(3);

console.log(b);

determinaDato(b);