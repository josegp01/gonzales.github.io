// "use strict"
//objetos
const producto={
    nombreProducto:"Monitor 20 Pulgadas",
    precio:350,
    disponible:true ,
}


const medidas={
    peso:'1kg',
    medida:'1m',
    disponible:true ,
}
//unir dos obejetos sin modificarlos

const nuevoProducto={...producto,...medidas}

console.log(nuevoProducto);