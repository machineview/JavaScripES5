
//OBJETO FECHA

//LIBRERIA MOMENT.JS MUY UTILIZADA PARA EL MANEJO DE FECHAS
//https://momentjs.com/



//Los meses en JavaScrip son en base 0
//por lo tanto 0 equivale a enero ...

//La hora esta en formato 24

let hoy = new Date();
let fMili = new Date(0);

//definir fecha fija
let fFija = new Date(1977, 11, 19, 23, 10, 15, 1);

console.log(hoy);
console.log(fMili);
console.log(fFija);

// 
//metodos y propiedades del objeto fecha


//obtener datos de una fecha

console.log(hoy.getFullYear());
console.log(hoy.getMonth());
console.log(hoy.getDate());
console.log(hoy.getHours());
console.log(hoy.getMinutes());

//representacion numerica en milis de una fecha
//PERO PARA QUE NOS PUEDE VALER ESTO

console.log(hoy.getTime());

//Ejemplo, obtener los segundos transcurridos entre dos fechas
let inicio = new Date();

for (i=0; i<1500; i++){
    console.log("algo ......")
}

let fin = new Date();

console.log(inicio);
console.log(fin);

let duracion = fin.getTime() - inicio.getTime();

console.log(duracion , "milisegundos");
console.log(duracion/1000 , "segundos");