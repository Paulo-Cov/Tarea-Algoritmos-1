let tex = prompt("Dime una palabra")
function stringVacia (tex) {
    if(typeof tex == undefined || tex == "" ){
        alert("No hay texto");
    }
    else{
        alert(tex.charAt(0));
    }
}
stringVacia(tex)

