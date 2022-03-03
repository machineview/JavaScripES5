//IF ELSE


//Ejemplo de IF simple

let nota = 90;

if (nota > 60){

    console.log("aprobo");
}

//Ejemplo de IF/ELSE

let nota2 = 90;

if (nota2 >= 100){

    console.log("aprobo");
}else{

    console.log("no aprobo")
}

//Ejemplo de IF/ELSE IF

let nota3 = 70;

if (nota3 >= 90){

    console.log("A");
}else if(nota3 >= 80){

    console.log("B")
}else if(nota3 >= 70){

    console.log("C")
}else if(nota3 >= 60){

    console.log("D")
}else{

    console.log("F")
}

//Ejemplo de IF/ELSE IF CON IF ANIDADO

let nota4 = 55;

if (nota4 >= 90){

    console.log("A");
}else if(nota4 >= 80){

    console.log("B")
}else if(nota4 >= 70){

    console.log("C")
}else if(nota4 >= 60){

    console.log("D")
}else{

    if(nota4 < 50){
        console.log("-F");
    }else{
        console.log("+F")
    }
    
    
}

//Ejemplo de IF de forma corta

let a = 10;
let b = 20;

let c = 0;

//con cinco lineas de codigo

if(a > b){
    c = a;
}else{
    c = b;
}

//El ejemplo superior en una linea
//se pregunta (a > b)?, si es asi muestra a sino b
let d = (a > b)? a : b;

//otro ejemplo

let e = (a > b)? function(){

    console.log("A es mayor que B");
    return a;

}() : function(){

    console.log("B es mayor que A");
    return b;
}();

//Otra version corta
//Si f tiene un valor lo muestra y si no muesta g

let f = undefined;
let g = 20;

let h = f || g ;

console.log(c);
console.log(d);
console.log(e);
console.log(h);

console.log("termino el codigo")