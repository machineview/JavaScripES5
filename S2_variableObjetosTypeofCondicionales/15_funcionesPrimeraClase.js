//funciones de primera clase
//las funciones son objetos y podemos llamarlas a traves de la notacion de puntos
function a() {

    console.log("funcion a");
    
}

a();

a.nombre = "maria";
a.direccion = {
    pais : "españa",
    ciudad : "coruña",
    edificio :{
        piso : "8avo",
        nombre : "edificio principal"
    }
}