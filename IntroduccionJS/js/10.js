//objetos

const producto={
    nombreProducto:"Monitor 20 Pulgadas",
    precio:350,
    disponible:true ,
}


// console.log(producto.precio);

//agregar nuevas propiedades
producto.imagen="imagen.jpg"

//eliminar propiedades

delete producto.disponible;
console.log(producto);