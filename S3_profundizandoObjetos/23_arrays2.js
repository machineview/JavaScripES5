//ARRAYS SEGUNDA TOMA DE CONTACTO

//Los arrays nos permiten alojar cualquier elemento en su interior
//valores primitivo
//objetos vacios
//funciones
//otros arrays
//vamos a hacer locuras con un array

let arr = [
    true,
    {
        nombre : "Fernando",
        apellido : "Herrera"
    },
    function(){
        console.log("vivo en un array");
    },
    function(persona){
        console.log(persona.nombre + " " + persona.apellido);
    },
    [   "fernando",
        "carlos",
        "hernando",
        "melissa",
        [
            "juan",
            "pedro",
            "lisa",
            function(){
                console.log(this);
            }

        ]
    ]
];

console.log(arr);

//Nos indica el tamaño del array, numero de elementos
console.log(arr.length);

//llamamos al elemento booleano

console.log(arr[0]);

//llamamos al objeto anonimo

console.log(arr[1].nombre + " " + arr[1].apellido);

//llamamos a la funcion

arr[2]();


//llamamos a la funcion persona enviandole los parametros del objeto vacio

arr[3](arr[1]);

//llamamos al array dentro del array

console.log(arr[4][3]);

//llamamos al array dentro del array dentro del array

console.log(arr[4][4][1]);

//creamos una variable para hacer referencia al array dentro del array

let arr2 = arr[4][4];

console.log(arr2);

//cambiamos un valor dentro del segundo array del array

arr2[2] = "cambiado";
console.log(arr2);
console.log(arr);

//llamamos a la funcion dentro del segundo array del array

arr2[3]();
