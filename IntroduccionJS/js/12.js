// "use strict"
//objetos
const producto={
    nombreProducto:"Monitor 20 Pulgadas",
    precio:350,
    disponible:true ,
}

Object.seal(producto);
producto.precio=300;



console.log(producto);