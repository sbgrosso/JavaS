

//Se permite solo mayores de 18

function edad_ingreso(){

var edad = document.getElementById("edad").value;

if (edad<18){
    alert("Debe ser mayor de edad para poder ingresar");

}
else {
    location.href = './homepage.html';
}


}






