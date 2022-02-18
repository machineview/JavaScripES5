//Argumentos

/*Cuando un contexto de funcion es invocado la funcion crea
un prototipo, dentro de ese prototipo esta el objeto
arguments*/

/*El parametro arguments hace referencia a lo enviado en 
la funcion en el momento de ser invocada*/
/*Si definimos una funcion con 4 argumentos , devemos pasarle esos cuatro argumentos
el parametro arguments sabe que cantidad de parametros estamos pasando a la
funcion*/

let arguments = 10;

/*en este ejemplo necesitamos forzosamente 4 datos para 
la funcion si no daria NaN*/

function miFuncion(a,b,c,d){

   // console.log(arguments);
    console.log( a + b + c + d );

};

//console.log(miFuncion());

miFuncion(10,20,30,40);

//SOLUCION PARA LA FUNCION DE CUATRO PARAMETROS

function miFuncion2(a,b,c,d){

    if(arguments.length !== 4){
        console.error("La funcion necesita cuatro parametros");
        alert("La funcion necesita cuatro parametros")
        return;
    }
     console.log( a + b + c + d );
 
 };
 
 //console.log(miFuncion());
 
 miFuncion2(10,20,30);
