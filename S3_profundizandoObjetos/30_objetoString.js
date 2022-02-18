//OBJETOS STRING

//valor primitivo
let b = "herrera";

//convierte en array
let a = new String("Fernando herrera");

console.log(a);

console.log(typeof(a));

console.log(a[3]);

//pasa a mayusculas y minusculas

console.log(a.toLocaleUpperCase() +" " + a.toLocaleLowerCase());

//INDEXOF
//nos indica en que posicion del array se encuentra un elemento

let i = a.indexOf("n");
console.log("la letra n esta en la posicion : " + i);

//en el caso de que se repita un elemento, podremos usar

let e = a.lastIndexOf("n");
console.log("la letra n esta en la posicion : " + e);

//tambien podemos averiguar donde se encuenta el principio de una palabra

let p = a.indexOf("herrera");
console.log("la letra n esta en la posicion : " + p);

//extraer cadena de texto de un string
let nombre = a.substring(6,3);
console.log(nombre);

//cortamos desde el inicio hasta donde encontremos un espacio
let nombre2 = a.substring( 0, a.indexOf(" "));
console.log(nombre2);

//SPLIT
//creamos un array
//si no indicamos nada nos crea todo el string en un elemento

let split = a.split();
console.log(split);

//si indicamos un espacio separa las distintas palabras del array
let split2 = a.split(" ");
console.log(split2);

//averiguamos la cantidad de palabras
console.log(split2.length);


//======================
//CODIGO ANTIGUO
//Para indicar su existencia
//escribe en la pagina donde esta el codigo la palabra indicada
document.write(a.bold());