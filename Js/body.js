

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

// Variables
const baseDeDatos = [
    {
        id: 1,
        nombre: 'Amundsen',
        precio: 300,
        imagen: './images/9356444_400.png'
    },

    {
        id: 2,
        nombre: 'Cape Point',
        precio: 450,
        imagen: './images/26391691_400.png'
    },

    {
        id: 3,
        nombre: 'Collective Arts',
        precio: 360,
        imagen: './images/9665327_400.png'
    }


];

let carrito = [];
const divisa = '$';
const DOMitems = document.querySelector('#items');
const DOMcarrito = document.querySelector('#carrito');
const DOMtotal = document.querySelector('#total');
const DOMbotonVaciar = document.querySelector('#boton-vaciar');

// Funciones


function renderizarProductos() {
    baseDeDatos.forEach((info) => {

        const miNodo = document.createElement('div');
        miNodo.classList.add('card', 'col-sm-4');

        const miNodoCardBody = document.createElement('div');
        miNodoCardBody.classList.add('card-body');

        const miNodoTitle = document.createElement('h5');
        miNodoTitle.classList.add('card-title');
        miNodoTitle.textContent = info.nombre;

        const miNodoImagen = document.createElement('img');
        miNodoImagen.classList.add('img-fluid');
        miNodoImagen.setAttribute('src', info.imagen);

        const miNodoPrecio = document.createElement('p');
        miNodoPrecio.classList.add('card-text');
        miNodoPrecio.textContent = `${info.precio}${divisa}`;

        const miNodoBoton = document.createElement('button');
        miNodoBoton.classList.add('btn', 'btn-primary');
        miNodoBoton.textContent = '+';
        miNodoBoton.setAttribute('marcador', info.id);
        miNodoBoton.addEventListener('click', anyadirProductoAlCarrito);
    
        miNodoCardBody.appendChild(miNodoImagen);
        miNodoCardBody.appendChild(miNodoTitle);
        miNodoCardBody.appendChild(miNodoPrecio);
        miNodoCardBody.appendChild(miNodoBoton);
        miNodo.appendChild(miNodoCardBody);
        DOMitems.appendChild(miNodo);
    });
}

/**
 * Add ´producto
 */
function anyadirProductoAlCarrito(evento) {
      carrito.push(evento.target.getAttribute('marcador'))

    renderizarCarrito();

}


function renderizarCarrito() {
   
    DOMcarrito.textContent = '';
    
    const carritoSinDuplicados = [...new Set(carrito)];
    
    carritoSinDuplicados.forEach((item) => {
        
        const miItem = baseDeDatos.filter((itemBaseDatos) => {
            
            return itemBaseDatos.id === parseInt(item);
        });
        
        const numeroUnidadesItem = carrito.reduce((total, itemId) => {
            
            return itemId === item ? total += 1 : total;
        }, 0);
        
        const miNodo = document.createElement('li');
        miNodo.classList.add('list-group-item', 'text-right', 'mx-2');
        miNodo.textContent = `${numeroUnidadesItem} x ${miItem[0].nombre} - ${miItem[0].precio}${divisa}`;
        // Boton de borrar
        const miBoton = document.createElement('button');
        miBoton.classList.add('btn', 'btn-danger', 'mx-5');
        miBoton.textContent = 'X';
        miBoton.style.marginLeft = '1rem';
        miBoton.dataset.item = item;
        miBoton.addEventListener('click', borrarItemCarrito);
        // Mezclamos nodos
        miNodo.appendChild(miBoton);
        DOMcarrito.appendChild(miNodo);
    });
    
    DOMtotal.textContent = calcularTotal();
}

/**
 * Borrar el del carrito
 */
function borrarItemCarrito(evento) {

    const id = evento.target.dataset.item;

    carrito = carrito.filter((carritoId) => {
        return carritoId !== id;
    });

    renderizarCarrito();
}


function calcularTotal() {
ito 
    return carrito.reduce((total, item) => {
        
        const miItem = baseDeDatos.filter((itemBaseDatos) => {
            return itemBaseDatos.id === parseInt(item);
        });
        
        return total + miItem[0].precio;
    }, 0).toFixed(2);
}


function vaciarCarrito() {

    carrito = [];
   
    renderizarCarrito();
}


DOMbotonVaciar.addEventListener('click', vaciarCarrito);


renderizarProductos();
renderizarCarrito();