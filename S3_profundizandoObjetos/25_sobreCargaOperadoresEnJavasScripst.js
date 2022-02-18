//Sobrecarga operadores en JavaScript

/*
es tener una funcion definida varias veces con parametros
diferentes
*/

function crearProductos(nombre, precio){
    nombre = nombre || "sin nombre";
    precio = precio || 0;

    console.log("producto : " ,nombre, "precio : ", precio)
}

//al llamarla sin parametros devuelve el valor por defecto
//"sin nombre" y 0

crearProductos();

//Creamos un producto

 crearProductos("lapiz");

//Creamos un producto con precio por defecto
 function crearProductos100(nombre){
     crearProductos(nombre,100);
 };

 crearProductos100("corrector");


 //Creamos un producto con nombre por defecto

 function crearProductoCamisa(precio){
     crearProductos("camisa", precio);
 }

 crearProductoCamisa(75);


