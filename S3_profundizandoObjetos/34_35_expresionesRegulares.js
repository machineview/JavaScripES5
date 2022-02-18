//EXPRESIONES REGULARES

//https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Regular_Expressions

//Nos valen para buscar en cadenas de caracteres


//los dos elementos siguientes representan lo mismo
//queremos buscar la letra a en una cadena

let reg1 = RegExp("a");
let reg2 = /a/;


let texto = "Hola Mundo ,  123456.";

let arr  = texto.match(/a/);
let arr1 = texto.match(reg1);
let arr2 = texto.match(reg2);

//nos devolvera un arry indicando el parametro buscado
//la posicion donde se encontro
//y el texto donde busco

console.log(arr);

console.log(arr1);

console.log(arr2);

//COMODINES EN REGEX
// "^a"
//el tejadillo busca al principio de la cadena 

let arr3  = texto.match(/^a/);
console.log(arr3);      //null

let arr4  = texto.match( /^H/ );
console.log(arr4);      //['H', index: 0, input: 'Hola Mundo', groups: undefined]

//
//"o$""
//el dolar busca al final de la cadena

let arr5  = texto.match(/o$/);
console.log(arr5);      //['o', index: 9, input: 'Hola Mundo', groups: undefined]
//console.log(arr5[0]);   //o

//"..."
//el punto indica  cualquier caracter

let arr6  = texto.match(/.../);
console.log(arr6[0]);   //Hol

//"[0-9]"
//"[4536]"
//busca y devuelve el primer numero encontrado que este entre lo indicado

let arr7  = texto.match(/[0-9]/);
console.log(arr7[0]); //1

//"[a-zA-Z]"
//busca y devuelve el primer valor encontrado que este entre lo indicado

let arr8  = texto.match(/[a-zA-Z]/);
console.log(arr8[0]); //H

//igual a lo anterior pero que empieze por H

let arr9  = texto.match(/^H[a-zA-Z]/);
console.log(arr9[0]); //Ho

//"\s"
//busca cualquier separacion en la cadena

let arr10  = texto.match(/\s/);
console.log(arr10[0]); //


//ABREVIAR EXPRESIONES REGULARES

//"\w" = "[a-zA-Z0-9]"
//quiero cualquier caracter

//"\d" = "[0-9]"
//quiero cualquier digito

//Lo siguiente se aplica al final de la expReg 
//"i" = insensible
//"g" = todas las apariciones
//"m" = multilinea

//buscar M sin case sensitive
let arr11  = texto.match(/m/);
console.log(arr11); //devuelve null ya que la es MAYUS

let arr12  = texto.match(/m/i);
console.log(arr12[0]); //M

//busca todas y las vocales y devuelvelas

let arr13  = texto.match(/[aeiou]/g);
console.log(arr13); //(4) ['o', 'a', 'u', 'o']

//"o+"
//buscar patrones repetitivos

let texto2 = "Hoolaaa Mundoooo"

let arr14  = texto2.match(/o+/g);
console.log(arr14); //Ho

//"o?" & "o*"
//devuelve todos los elementos del array como vacios menos el indicado
//el ? los separa y el * justa caracteres iguales
//hace match aunque el texto este vacio
let arr15  = texto2.match(/o?/g);
console.log(arr15); //(17) ['', 'o', 'o', '', '', '', '', '', '', '', '', '', 'o', 'o', 'o', 'o', '']

//"o{2,4}"
//en el siguiente ejemplo indicamos que queremos que devuelve los caracteres
//en grupos de 2

let texto3 = "aeropuerto";

console.log(texto3);

let arr16 = texto3.match(/\w{2,2}/ig);

console.log(arr16);

//ejercicio
//queremos solo obtener los numeros

let texto4 = "La respuesta a la suma es : 45 + 60 = 105";

console.log(texto4);

let arr17 = texto4.match(/\d{1,}|respuesta/ig);

console.log(arr17); //(3) ['45', '60', '105']