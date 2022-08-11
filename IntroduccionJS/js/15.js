const meses=['Enero','Febrero','Marzo','Abril','Mayo'];

const carrito=[

    {nombre: 'Monitor 20 pulagadas', Precio: 500},
    {nombre: 'Telivisor 50 pulgadas', Precio: 700},
    {nombre: 'Tablet0', Precio: 300},
    {nombre: 'Audifonos', Precio: 200},
    {nombre: 'Teclado', Precio: 50},
    {nombre: 'Celular', Precio: 500},
    {nombre: 'Bocinas', Precio: 300},
    {nombre: 'Laptop', Precio: 800},
]

meses.forEach(function(mes){
    if(mes=='Marzo'){
        console.log('Marzo si existe')
    }
})

//incluides
let resultado=meses.includes('Marzo')


//some ideal para arreglo de objetos

resultado=carrito.some(function(producto){
    return producto.nombre === 'Celular'
})


//reduce
resultado=carrito.reduce(function(total,producto){
    return total+ producto.Precio
},0)


//filter
resultado=carrito.filter(function(producto){
    return producto.Precio >400
})

console.log(resultado)