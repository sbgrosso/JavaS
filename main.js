

console.log("HOLA");


//Se permite solo mayores de 18
//MENSAJE DE BIENVENIDA SOLO SI ES MAYOR DE 18

let edad_usuario = prompt ("Ingrese su edad");
if (edad_usuario<18){
    alert("Debe ser mayor de edad para poder ingresar")

}
if (edad_usuario>=18){
        console.log("Bienvenido!");
}
else{
    console.log("No puede ingresar");
}


//compra al carrito
console.log("seleccione cantidad de latas");
console.log("8th year Stout: 120$");

const precio_8thyear = 120;
let producto = prompt ("Ingrese el producto");
let cantidad = prompt (Ingrese cantidad deseada");

function calcular_total(producto , cantidad )
