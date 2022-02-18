//ARREGLOS (ARRYAS)
//Es una coleccion de datos del mismo tipo
//Los arreglos en javascrip son en base a 0

let arr =[5,4,3,2,1];

console.log(arr);

//vemos la primera posicion
console.log(arr[0]);

//si llamamos una posicion que no existe no arroja error
//devuelve undefined

console.log(arr[0],arr[5]);

//FUNCIONES DE LOS ARREGLOS

//voltear un array
arr.reverse();
console.log(arr);

//multiplicamos todos los elementos de array por si mismos
arr = arr.map( function(elem){

    elem *= elem;
    return elem;

});

console.log(arr);

//Ejecuta la raiz cuadrada de cada elemento del array
arr = arr.map( Math.sqrt) ;

console.log(arr);

//JOIN
//separa los elementos de array por lo indicado en parametro
arr = arr.join("|");
console.log(arr);

//SPLIT

arr = arr.split("|");
console.log(arr);

//PUSH 
//Añade un elemento al final del array

arr.push("6");
console.log(arr);

//UNSHIFT
//Añade un elemento al principio del array

arr.unshift("0");
console.log(arr);

//.TOSTRING
//Pone la representacion textual del array

console.log(arr.toString());

//.POP
//Elimina el ultimo elemento del array

let elemine = arr.pop();
console.log(arr);

//.SPLICE(nº1,nº2,elem)
//El 1er Nº indica la posicion del array donde queremos trabajar
//El 2do Nº indica el numero de elementos a eliminar a partir de la primera posicion
//El elem nos permite meter elementos al array (1,0,elem1)

arr.splice(1,0,"10");
console.log(arr);

//.SLICE
//Es como cortar, lo contrario a splice
//En el ejemplo indicamos que a partir de la primera posicion del array
//conserve los elementos del 1 al 3 e elimine todo lo demas

arr = arr.slice(3,4);
console.log(arr);
