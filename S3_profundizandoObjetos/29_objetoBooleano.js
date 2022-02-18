//OBJETO BOOLEANO


let a = true;

let b = false;

//El valor por defecto de un objeto boolean en false
let c = new Boolean();

console.log(c);

//un 0 devuelve false
//un Nan devuelve false
//un null devuelve false
//un undefined devuelve false
//un valor vacio devuelve false
let d = new Boolean(0); 
console.log(d);


//un 1 devuelve true
let e = new Boolean(1); 
console.log(e);


//un string devuelve true
//un infinity devuelve true
let f = new Boolean("12"); 
console.log(f);


//ejemplo

let g = new Boolean();

console.log(g.valueOf());

if ( g == true){
    console.log("soy true")
}else{
    console.log("soy false");
};
