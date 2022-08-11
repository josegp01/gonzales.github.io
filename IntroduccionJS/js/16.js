//funciones

//declaracion de una funcion

function sumar(){
    console.log(10 + 10)
}
sumar();

function multiplicar(a,b){
    console.log(a * b);
}

multiplicar(10,15);


//expresion de la funcion
const sumar2= function(){
    console.log(3 + 3);
}

sumar2();

//IIFE
(function(){
    console.log('Esto es una funcion')
})();