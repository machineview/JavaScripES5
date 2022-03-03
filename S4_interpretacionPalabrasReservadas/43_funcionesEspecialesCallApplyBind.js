//FUNCIONES ESPECIALES

/*

Toda funcion en jvs tiene tres prototipos, llamados
-call()
-apply()
-bind()

*/

/*
BIND 
coge como this lo indicado en su interior

ejemplo
*/

let carro ={
    color : "blanco",
    marca : "mazda",
    imprimir : function (){
        let salida = this.marca + " - " + this.color;
        return salida;
    }
}

console.log(carro.imprimir());

//la siguiente funcion da error

let logCarro = function( arg1, arg2 ){
    console.log("Carro :",this.imprimir());
    console.log("Argumentos: ", arg1, arg2 );
}

//logCarro();

//pero si hacemos lo siguiente funciona
//el prototipo .bind(), hace que el objeto apunte a lo
//indicado entreparentesis
//En el ejemplo hacemos que this de la var logCarro apunte
//a carro
let logModeloCarro = logCarro.bind(carro);

logModeloCarro();

/*
CALL & APPLY
#
CALL
coge como this el primer parametro indicado
#
APPLY
Tiene dos parametros, el primero indica el this
y el segundo tiene que ser un arreglo
Es util cuando no sabemos la cantidad de parametros
a mandar a la funcion
*/
let carro2 ={
    color : "verde",
    marca : "seat",
    imprimir : function (){
        let salida = this.marca + " - " + this.color;
        return salida;
    }
}

let logCarro2 = function( arg1, arg2 ){
    console.log("Carro :",this.imprimir());
    console.log("Argumentos: ", arg1, arg2 );
    console.log("=========================");
}

let logModeloCarro2 = logCarro2.bind(carro2);

logModeloCarro2("pri argt","seg argt");

logModeloCarro2.call(carro2, "arg1 call", "arg2 call");

logModeloCarro2.apply(carro2, ["arg1 apply", "arg2 apply"]);

//FUNCIONES PRESTADAS
//Todo esto que acabamos de ver es util para las funciones prestadas

let carro3 ={
    color : "rojo",
    marca : "toyota",
    imprimir : function (){
        let salida = this.marca + " - " + this.color;
        return salida;
    }
}

//De esta forma podremos imprimir un objeto y cambiar su this por otro de 
//caracteristicas parecidas

console.log(carro.imprimir.call(carro3));