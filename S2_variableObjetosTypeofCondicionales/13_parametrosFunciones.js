//PARAMETROS EN LAS FUNCIONES

//A las funciones les podemos pasar variable primitivas, objetos u otras funciones

//#1
//Indica que si no entregamos el valor del apellido, devuelva xxx
//Las doble barras indican "o"

function imprimir(nombre, apellido){

    apellido = apellido || "xxx";   //#1
    
    console.log(nombre + " " + apellido);
};

imprimir("juan","padilla");

//#PASAR OBJETOS
//pasar parametros a una funcion a traves de un objeto
//bien objeto anonimo o nombrado

function imprimir2(persona){

    console.log(persona.nombre + " " + persona.apellido);

}

//objeto anonimo
imprimir2({
    nombre :"juan1",
    apellido :"padilla1"
});

//objeto nombrado
let persona ={
    nombre :"juan2",
    apellido :"padilla2"
};

imprimir2(persona);

//#PASAR FUNCIONES

//Es muy comun a la hora de pasar funciones indicar el nombre de parametro "fn"

//funcion anonima

function imprimir3(fn){

   fn();
};

let persona2 ={
    nombre :"juan3",
    apellido :"padilla3"
};

imprimir3(function () {
    console.log("funcion anonima");
})

//funcion explicita
function imprimir4(fn){

    fn();
 };
 
 let persona3 ={
     nombre :"juan4",
     apellido :"padilla4"
 };
 
let miFuncion = function () {
    console.log(miFuncion);
};

 imprimir4(miFuncion);


