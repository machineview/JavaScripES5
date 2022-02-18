/*Notacion de puntos*/
let persona = {
    nombre : "juana",
    apellido : "herrera",
    edad : 25,
    direccion: {
        pais : "España",
        ciudad : "Coruña",
        edificio : {
            nombre : "edificio principal",
            telefono : "2222-3333"
        }
    }
};

console.log(persona.nombre);
console.log(persona.direccion.ciudad);

/*Añadir a obj desde el exterior*/ 
persona.direccion.codigoPostal = 9615;

console.log(persona.direccion);
console.log(persona.direccion.codigoPostal);

/*Atajos en notacion por puntos */
console.log(persona.direccion.edificio.telefono);

/*Definir let hasta punto determinado*/
let edificio = persona.direccion.edificio;

edificio.numeroPiso = "8avo piso";

console.log(edificio.numeroPiso);

console.log(persona);

/*Notacion de corchete*/

console.log(persona["nombre"]);

console.log(persona["direccion"]["ciudad"]);

let campo = "edad2" ;

console.log(persona[campo]);