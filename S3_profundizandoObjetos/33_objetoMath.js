//OBJETO MATH

//mostramos el numero PI y el E , son constantes y estas se 
//escriben en MAYUS

const PI = Math.PI;
const E  = Math.E;

console.log(PI);
console.log(E);

//Redondear

let num1 = 10.62345678;

console.log(num1);
console.log(Math.round(num1));

//redondear con dos decimales
//si queremos tres decimales *1000 y asi sucesivamente
//esto lo podemos meter en un prototype y ya lo usamos de una manera mas eficaz


console.log(Math.round( num1 * 100 ) / 100);


//objener valor entero de un numero sin redondeo
console.log(Math.floor(num1));

//obtener un numero aleatorio

//console.log(Math.random());

//CREAR UN DADO VIRTUAL

function randonEntre( min, max ){
    return Math.floor ( Math.random() * ( max-min +1 ) + min );
}

console.log(randonEntre(1,6));


//obtener raiz cuadrada

console.log(Math.sqrt(10));

//elevar un numero a un exponente

console.log(Math.pow(5,3));

