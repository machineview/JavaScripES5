/*RETORNO DE LAS FUNCIONES
*/

//Las funciones pueden devolver
//tipos primitivos
//objetos
//funciones
//undefined
//null

function obtenerAleatorio() {

    return Math.random();
    
};

console.log ( obtenerAleatorio()+10);

function obtenerNombre() {

    return "Juan";
    
};

console.log(obtenerNombre());

//Funcion que regresa valor booleano
function esMayor05() {

    if(obtenerAleatorio() > 5){
        return true;
    }else{
        return false;
    }
    
}

if(esMayor05()){
    console.log("Es mayor a 0.5");
}else{
    console.log("Es menor a 0.5");
}

//Funcion que regresa objetos

function crearPersonal(nombre,apellido){

    return {
        nombre : nombre,
        apellido :apellido,
    };
    
}

let persona = crearPersonal ("maria","paz");

console.log(persona.nombre + " " + persona.apellido);

//Funcion que regresa funciones

function crearFuncion() {

    return function (nombre) {
        console.log("me creo" + " " + nombre);
    
        return function() {

        console.log("segunda funcion");
        }
    }
}

let nuevaFuncion = crearFuncion();

let segundaFuncion = nuevaFuncion(persona.nombre);

segundaFuncion();