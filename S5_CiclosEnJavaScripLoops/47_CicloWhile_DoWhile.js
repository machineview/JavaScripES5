//CICLO WHILE Y DO WHILE


//WHILE
//si ponemos como var 1 y condicion <=10 el ciclo sera infinito y bloqueara el PC


//Mientras que i no sea mayor a 10, aumenta i de uno en uno
let i = 0 ; 

while( i <10 ){

    i++;
//Si llegas a cinco rompes el ciclo con break
/*    if( i === 5){
        break;
    }
*/    
//Si llegas a cinco comienza de nuevo la evaluacion del while
//De esta forma se come el numero 5 pues se lo salta
    if( i === 5){
        continue;
    }

    console.log(i);
}

//DOWHILE
//Primero ejecuta el codigo y despues evalualo

//En este caso es importante asegurarse de que el ciclo while tiene fin
//y cierra el codigo en algun punto

let e = 0;

do{
    e++;

    console.log(e);

}while( e <10 );