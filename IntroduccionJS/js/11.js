//objetos
const producto={
    nombreProducto:"Monitor 20 Pulgadas",
    precio:350,
    disponible:true ,
}

const precio_producto=producto.precio;
console.log(precio_producto)

//destructuring
const {precio,nombreProducto}=producto

console.log(precio);
console.log(nombreProducto);