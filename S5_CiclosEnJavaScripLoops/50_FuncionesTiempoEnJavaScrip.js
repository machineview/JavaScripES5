//FUNCIONES DE TIEMPO EN JAVASCRIP

//funciones para controlar el tiempo de ejecucion 
//El THIS dentro de estas funciones apuntan al objeto global
//mucho cuidado en este aspecto

setTimeout(function(){

    console.log("paso un segundo");

}, 1000 );

let segundos = 0; 

let intervalo = setInterval(function(){

    segundos ++;

    console.log("seg", segundos);

    if(segundos === 3){
        clearInterval(intervalo);
    }

},1000);

//una forma de usar this al utilizar esta funciones es utilizar una var
//que apunte a this dentro de la funcion global e indicar esta en la funcion
//de tiempo, como en el ejemplo con self

let juan = {
    nombre: "juan",
    edad:30,

    imprimir: function(){

        let self = this;

        setTimeout(function(){
            console.log(self.nombre,self.edad);
        },1000);
    }

}
juan.imprimir();