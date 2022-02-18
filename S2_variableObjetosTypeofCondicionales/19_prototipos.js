//PROTOTIPOS
//permiten expandir objetos y agregarles propiedades
//normalmente se utiliza no para propiedades sino para hacer mas eficiente el uso de los objetos
/*
function Persona(){
    this.nombre   = "fernando";
    this.apellido = "herrera";
    this.edad     = 30;

    this.imprimirInfo = function(){
        console.log(this.nombre + " " + this.apellido + "(" + this.edad + ")" );
    }
}

//Agregar propiedades o metodos a nuestra funcion mediante prototype
//este metodo de agregar propiedades no las aloja donde las demas sino en el apartado prototype de la funcion

Persona.prototype.pais = "costa rica";

let fer = new Persona();

fer.imprimirInfo();

console.log(fer);
console.log(fer.pais);

//La funcion Persona tiene dentro otra funcion que imprime sus propiedades
//ese funcion interna se puede eliminar y llamarla con .prototype
//un prototype no se guarda en memoria
//De esta forma nos ahorramos codigo
//vamos a verlo
*/
function Persona2(){
    this.nombre2   = "fernando";
    this.apellido2 = "herrera";
    this.edad2     = 30;
}

Persona2.prototype.imprimirInfo2 = function(){
    console.log(this.nombre2 + " " + this.apellido2 + "(" + this.edad2 + ")" );
}

let fer2 = new Persona2();

console.log(fer2);

console.log(fer2.imprimirInfo2());

/*creamos un prototivo, despues desde la consola nombramos una 
variable a=1 y llamamos a a.prototype() y devolvera true
*/


Number.prototype.esPositivo = function(){
    if( this > 0 ){
        return true;
    }else{
        return false;
    }
}

