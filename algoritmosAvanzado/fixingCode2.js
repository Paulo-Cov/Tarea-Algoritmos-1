grado
function gradeUser(grade) {
if (grade <= 6 && grade >= 0) {
console.log("Fallaste");
}
if (grade > 6 && grade <= 9) {
console.log("Insuficiente");
}
if (grade > 9 && grade <= 14) {
console.log("Bueno");
}
if (grade == 15) {
console.log("Excelente");
}
if (grade < 0 || grade > 15) {
console.log("Error, fuera de rango");
} //Error si el usuario no ingresa un valor dentro del rango
}
gradeUser(grade); //LLamada a la funcion