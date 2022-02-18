//Contexto de las funciones

//contexto global barre toda la pagina
//contexto de la funcion , lo que esta incluido en esta

function crearFunciones(){

    let arr =[];
    let numero = 1;

    arr.push(function(){
        console.log(numero);
        }
    );

    numero = 2;
    arr.push(function(){
        console.log(numero);
    });

    numero = 3;
    arr.push(function(){
        console.log(numero);
    });

    return arr;

}

let funciones = crearFunciones();

//Nos devolvera todo 3 por el contexto, explicar en detalle
funciones[0]();
funciones[1]();
funciones[2]();

//como conseguimos imprimir el numero que esta en su contexto

function crearFunciones2(){

    let arr =[];
    let numero = 1;

    for(let numero = 1; numero <=3; numero++){

    arr.push(

        (function(numero){
            return function(){
                console.log(numero);
            }
        })(numero)  

    );
    }

    return arr;

}
let funciones2 = crearFunciones2();

funciones2[0]();
funciones2[1]();
funciones2[2]();