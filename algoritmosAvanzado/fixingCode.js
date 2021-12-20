let list=[6,2,9]; //se crea el arreglo
function length(list){
if(list.length === 0) {//Funcion .length que da el tamaño del arreglo
return 0; //Devuelve 0 si el arreglo esta vacio
}
return list.length; //Devuelve el tamaño del arreglo
}
console.log(length(list)); //se invoca la funcion