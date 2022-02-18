/*FUNCIONES*/

function primeraFuncion(){
    let a = 20;
    console.log(a);
}

primeraFuncion();

function segundaFuncion(){
 
}

function terceraFuncion(){
    console.log("invocada");
}

let miFuncion = terceraFuncion;

miFuncion();