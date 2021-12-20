//Ejercicio 2
let valores=[3,5,7,1,6]
valor = valores.sort(function(x,y){
return y - x; // x-y regresa orden ascendente, y-x regresa orden descendente
});
console.log(valor);