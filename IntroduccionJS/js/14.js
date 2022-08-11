//arreglos o arrays;

const numeros=[10,20,30,40,50]


const meses=['Enero','Febrero','Marzo','Abril','Mayo'];


//acceder a los valores del arreglo

// console.log(numeros[4])

// //conocer la extension de un arreglo

// console.log(meses.length)

// //mostrar todos los elementos del array
// meses.forEach(function(mes){
//     console.log(mes)
// })
numeros.push(60);//agrega al final del arreglo

numeros.unshift(-10,-20,-30)// agrega al inicio del arreglo 

// meses.pop();//elimina el ultimo elemento
// meses.shift();//elimina el primer elemento

meses.splice(2,1); //elimina apartir del indice y cuantos quiere q elimine despes de eso 


//rest operation
const nuevoArreglo=[...meses,'Junio']

console.table(numeros)
console.table(meses)
console.table(nuevoArreglo)

