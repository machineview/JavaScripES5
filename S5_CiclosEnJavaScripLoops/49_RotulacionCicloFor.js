//ROTULACION DE LOS CICLOS

//Cuando se anidan ciclos for es util rotularlos para poder referenciarlos

for_principal:
for ( i=1 ; i<=5 ; i++ ){

    console.log("i",i);

    for_secundario:
    for ( j=1 ; j<=5 ; j++ ){

    console.log("j",j);

         for ( x=1 ; x<=5 ; x++ ){

         console.log("x",x);

         break for_principal;

         }    
    }
}