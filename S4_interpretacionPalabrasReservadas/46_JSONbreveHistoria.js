/*
# JSON UNA BREVE HISTORIA

JSON (Notación de objetos de JavaScript) es un formato ligero de intercambio de datos. 
Es fácil para los humanos leer y escribir. Es fácil para las máquinas analizar y generar. 
Se basa en un subconjunto del estándar de lenguaje de programación JavaScript ECMA-262 3ra edición - diciembre de 1999. 
JSON es un formato de texto que es completamente independiente del lenguaje pero utiliza convenciones que son familiares 
para los programadores de la familia de lenguajes C, incluidos C, C++, C#, Java, JavaScript, Perl, Python y muchos otros. 
Estas propiedades hacen de JSON un lenguaje de intercambio de datos ideal.

JSON se basa en dos estructuras:

Una colección de pares de nombre/valor. En varios idiomas, esto se realiza como un objeto , registro, estructura, 
diccionario, tabla hash, lista con clave o matriz asociativa.
Una lista ordenada de valores. En la mayoría de los lenguajes, esto se realiza como una matriz , un vector, 
una lista o una secuencia.
Estas son estructuras de datos universales. Prácticamente todos los lenguajes de programación modernos los admiten 
de una forma u otra. Tiene sentido que un formato de datos que sea intercambiable con los lenguajes de programación 
también se base en estas estructuras.

Pagina web

https://www.json.org/json-en.html

*/

//creamos un objeto en javaScrip

let objetoJS = {

    nombre: "fernado",
    edad: 30
};

//lo mostramos de forma literal

console.log("objeto literal",objetoJS); //objeto literal {nombre: 'fernado', edad: 30}

//lo parseamos a JSON

let jsonString = JSON.stringify(objetoJS);

//lo mostramos en JSON
console.log(jsonString); //{"nombre":"fernado","edad":30}

/*PAGINA PARA REALIZAR EVALUACIONES DE ARCHIVOS JSON

http://json.parser.online.fr/

*/

//CONVERTIR JSON A JAVASCRIP
//cogemos la var json generada anteriormente jsonString y lo pasamos a JS

let objetoDesdeJson = JSON.parse(jsonString);

console.log(objetoDesdeJson); //{nombre: 'fernado', edad: 30}

console.log(objetoDesdeJson.nombre); 
console.log(objetoDesdeJson.edad); 