

//Se permite solo mayores de 18
//MENSAJE DE BIENVENIDA SOLO SI ES MAYOR DE 18
function edad_ingreso(){

    let edad_usuario = prompt ("Ingrese su edad");
if (edad_usuario<18){
    alert("Debe ser mayor de edad para poder ingresar");

}
else {
        console.log("Bienvenido! Compre mucho");
}


}

edad_ingreso();




