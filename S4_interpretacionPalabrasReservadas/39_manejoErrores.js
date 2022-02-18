//MANEJO DE ERRORES JAVASCRIPT

try{
    let a =100;
    console.log("El valor de a es :",a);
}
catch(e){

    console.log("Disparo error de catch: ",e);
}
finally{

    console.log("finalmente");
}

/*
try : intenta hacer esto
catch : si no haz esto otro
finally : pero siempre haz esto
si no se utiliza el catch tiene que ir el finally
si no arroja error de sintaxis
*/

//Como disparar un error en tiempo de ejecucion
//como disparamos el catch??

//por ejemplo mediante un throw

try{
    let a =100;

    if(a === 100){
        throw 'que mal';
    }else{
        throw 'oh oh';
    }
    console.log("El valor de a es :",a);
}
catch(e){

    if (e === "que mal"){
        console.log("error tipo 1");
    }

    if (e === "oh oh"){
        console.log("error tipo 2");
    }
    
}
finally{

    console.log("finalmente");
}

//otro ejemplo



try{

    //throw new Error('error tipo 1');

    throw{
        nombreError : "error tipo 1",
        accion : "salir pitando",
        coderror : 1
    }

    console.log("esta parte nunca se ejecuta");

}
catch(e){

    console.log(e.message);
    console.log(e.nombreError);
    console.log(e.accion);
    console.log(e.coderror);

    console.log('parte del catch');


}
finally{

    console.log("finalmente");
}

//la mejor forma de manejar errores
//catalogo de errores

// el throw puede disparar cualquier objeto o funcion y todo lo que dispare
// va a terminar en el parametro "e" del catch
// lo mas recomendable es que si el codigo javascrip puede fallar se ejecute
// throw de la siguiente forma {throw new Error("nombre del error")}

try{

   throw 1 ; //n cualquier numero
}
catch(e){

    registroError(e);


}
finally{

    console.log("finalmente");
}

function registroError(e){

    let ahora = new Date();
    console.log("se registro un error ", e, " a las: ", ahora.getTime());
}

//console.log(registroError);