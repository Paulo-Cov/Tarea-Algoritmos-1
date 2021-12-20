//Ejercicio 1
function maxnumber(){
    let numbers=[3,5,7,1,6];
   
    var Max= Math.max.apply(null,numbers); //Función math max regresa el valor maximo en un arreglo
    console.log(Max);
}

maxnumber();
