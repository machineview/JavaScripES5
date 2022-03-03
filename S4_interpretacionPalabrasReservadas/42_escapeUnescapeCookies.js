//Cookeis
//ESCAPE UNESCAPE Y COOKIES

/*
las cookies normalmente caducan al cerrar la sesion del navegador
aunque podemos definir tiempos

VER LAS COOKIES EN CROME

chrome://settings/cookies

*/
/*
document.cookie = "nombre = fernado";
document.cookie = "apellido = herrera";

let cookeis = document.cookie;

console.log(cookeis);
*/
//La mejor forma de crear cookies es mediante una funcion
/*es necesario crear un procedimiento para escapar los
caracteres a la hora de dar valor a las cookeis, para evitar
errores
No vamos a meter ningun valor de cookies si no esta escapado

##Deveriamos usar la funcion escape(), pero esta en desuso, en su lugar
usaremos encodeURI()##
ejemplo de lo comentado
let demo = "123;123*123'123//";

console.log(escape(demo));
console.log(encodeURI(demo));

*/

function crearCookie( nombre, valor ){

    //escapamos el valor de la cookie para evitar errores
    valor = encodeURI(valor);

    //indicamos que la cookie durara un mes
    let hoy = new Date();
    hoy.setMonth(hoy.getMonth()+1);

    document.cookie = nombre + " = " + valor  + hoy.toUTCString() + ";";
       
}

function borrarCookie(nombre){

    let hoy = new Date();
    hoy.setMonth(hoy.getMonth()-1);

    document.cookie = nombre + " =x;expires " + hoy.toUTCString() + ";";

}

crearCookie("apellido","herrera");

borrarCookie("nombre");


//obtener las cookies para verlas

function getCookies(nombre){

    let cookeis = document.cookie;

    let cookieArr = cookeis.split("; ");

    console.log(cookieArr);

    for (i=0 ; i<cookieArr.length; i++){

        let parArr = cookieArr[i].split("=");
        cookieArr[i] = parArr ;
        if( parArr[0] === nombre ){
            return decodeURI(parArr[1]);
        }

    }

    console.log(cookieArr);

    return undefined;
}

console.log(getCookies("apellido"));
