//COMENTARIOS EN JAVASCRIP

/*
podemos eliminar todos los comentario de un archivo y que sea
dificil de leer utilizando la siguiente pagina

https://htmlcompressor.com/compressor/

Todo el codigo que vemos abajo se comprime ocupando menos
y siendo mas eficiente

let arr=["fernado",{nombre:"fernando",apellido:"herrera",getNombre:function(){return this.nombre+" "+this.apellido}},true,function(){console.log(this)}];console.log(arr);

*/

//comentario linea simple

/*
comentario multi linea
comentario multi linea
comentario multi linea
*/


let miArreglo = [
    //la primera posicion es ...
    //sirve para ....
    //hace tal cosa...
    "fernado",
    //la segunda ...
    //hace tal cosa...
    //podemos meter comentarios en cualquier sitio
    
    {

    nombre : "fernando",
    apellido : "herrera",
    getNombre : function()
    {
        return this.nombre + " " + this.apellido;
    }
    //este es otro comentario indiferente para javascrip
},true, function(){console.log(this)}];


console.log(
    miArreglo
);