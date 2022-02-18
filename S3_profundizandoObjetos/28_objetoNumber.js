//objeto numero


//las dos siguientes variable no son iguales
//una es un valor primitivo y otra un objeto
let a = 10.456789;

let b = new Number(10);

//funciones de variables numericas

//recorta el numero a un numero de decimales determinado

console.log(a.toFixed(2));

//devuelve el valor numerico con string

let c = 10.456789;

c = c.toString();

console.log(c);

//precision numerica

console.log(a.toPrecision(4));

//INFINITY
//cuantos numeros aguanta la variable numerica
//Aguanta hasta 308 digitos exponenciales, arrojando infinity

let d = 10;

d *= 100000000000000000000000000000000000000000000000000000;
d *= 100000000000000000000000000000000000000000000000000000;
d *= 100000000000000000000000000000000000000000000000000000;
d *= 100000000000000000000000000000000000000000000000000000;
d *= 100000000000000000000000000000000000000000000000000000;
d *= 100000000000000000000000000000000000000000000000000000;

console.log(d);

//NaN
//Error de no es un numero

let e = 10;

e = e * "f";

console.log(e + 10);


//VALUEOF

let f = new Number("20");

console.log(f);
console.log(f.valueOf());


