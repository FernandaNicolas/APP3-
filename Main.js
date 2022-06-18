//var _ = require("underscore");
const fs = require('fs');
// Se marcará el inicio del laberinto con un 2
function marcar_inicio(tablero){
    let flag = true;
    tablero.forEach(function(tabla){
        if(flag === true && tabla[0]=== 0){
            tabla[0] = 2;
            flag = false;
        }
    });
    return tablero;
}
// Se marcará el final del laberinto con un 3
function  marcar_final(tablero){
    let flag = true;
    tablero.forEach(function(tabla){
        if(flag === true && tabla[tabla.length-1]=== 0){
            tabla[tabla.length-1] = 3;
            flag = false;
        }
    });
    return tablero;
}
// Se ejecutara esta funcion de manera recursiva hasta completar el laberinto
function recursividad(tablero,posicion,recorrido){
    //code here

}
// Ahora leeremos el archivo "input.txt" y lo transformamos en un array de arrays
const log = data => console.log(JSON.stringify(data));
let txt = fs.readFileSync('input.txt', 'utf8',);
let lines  = txt.trim().split(/\n/).map(row => row.split(/\s/));
lines[lines.length-1].push("");
let laberinto = lines.map(row => row.map(bit => +bit));
laberinto.forEach(function (pos){
    pos.pop(pos.length-1);
});
laberinto = marcar_inicio(laberinto);
laberinto = marcar_final(laberinto)
console.log(laberinto);
//Ahora encontramos la posicion inicial del laberinto
let posicion_inicial = []
let temp_num = 0;
// Primero encontramos el priner index del inicio
laberinto.forEach(function(lab){
    if(lab[0]=== 2){
        posicion_inicial.push(temp_num)
    }
    temp_num+= 1;
});
// Como sabemos que el inicio está siempre a lo mas a la izquierda, su segundo indice será siempre 0
posicion_inicial.push(0);
console.log(recursividad(laberinto,posicion_inicial,recorrido));