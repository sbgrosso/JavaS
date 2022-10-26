

    class Cerveza {
        constructor(nombre, tipo, precio, cantidad) {
            this.nombre = nombre;
            this.tipo = tipo;
            this.precio = precio;
            this.cantidad = cantidad;
        }
    }
    //Cervezas
    var arrayCerveza= [];
arrayCerveza.push(new Cerveza ('Amundsen','Apa',300,40));     
arrayCerveza.push(new Cerveza ('Cape Point','Apa',450,20));
arrayCerveza.push(new Cerveza ('Collective Arts','Apa',360,18));
console.log (arrayCerveza); 
    
      
    do{
        var continuar = prompt('Desea comprar? Ingrese si o no');
        if (continuar === "no"){
        break;
    }
    else {
        var nombreelegido = prompt('Ingrese el nombre de la cerveza elegida');
        var cantidadelegida = prompt('Ingrese la cantidad de latas que desea');
        var productoingresado = arrayCerveza.filter(Cerveza=>Cerveza.nombre.includes(nombreelegido));
        console.log (productoingresado);
        for (var producto of productoingresado)
        {alert("su precio a pagar es " + (Cerveza.precio))}
  
     
    }
    }while (continuar!="no"); 

