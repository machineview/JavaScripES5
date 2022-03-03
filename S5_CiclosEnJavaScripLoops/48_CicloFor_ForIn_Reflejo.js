//CICLO FOR Y FOR IN REFLEJO


//CICLO FOR

//Mientras se cumpla una condicion se ejecuta el codigo en bucle

for( i=0 ; i <10 ; i++){

    console.log(i);
}
console.log("________________________________________________");
//FOR IN

//Es muy utilizado cuando tenemos objetos y queremos barrer cada una de las
//propiedades dentro de los objetos

//creamos la objeto llamado persona
let Persona = function(){
    this.nombre = "juan";
    this.apellido = "pineda";
    this.edad = 30;
};

//asignamos que juan pertenece al objeto persona
let juan = new Persona();

//añadimos una nuevo propiedad al objeto y aunque esta propiedad no este dentro
//del objeto primigenio el ciclo FOR nos la muestra
Persona.prototype.direccion = "San Jose"

//muestrame todas las propiedades de juan y sus valores
for (prop in juan){

    console.log(prop,":", juan[prop]);
}

console.log("________________________________________________");

//REFLEJO
//Para que solo muestre las propiedades del objeto primigenio
//utilizaremos .hasOwnProperty
//con el if indicamos que si no esta la propiedad en el objeto vuelva a empezar
//el ciclo

for (prop in juan){

    if(!juan.hasOwnProperty(prop))
        continue;

    console.log(prop,":", juan[prop]);
}

console.log("________________________________________________");

//EVALUACION DE ARRAYS

//De la siguiente forma nos muestra el index del array

for( num in [1,2,3,4,5,6,7,8,9,10]){
    console.log(num);
}

console.log("________________________________________________");

//Es mejor indicar lo siguiente
//Para cada uno de los valores del array
[1,2,true,4,5,6,false,8,9,"texto"].forEach(function(valores){

    console.log(valores);

})