//var _ = require("underscore");

// Se marcará el inicio del laberinto con un 2
function marcar_inicio(tablero){
    let flag = true;
    tablero = tablero.forEach(function(tabla){
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
    tablero = tablero.forEach(function(tabla){
        if(flag === true && tabla[tabla.length-1]=== 0){
            tabla[tabla.length-1] = 3;
            flag = false;
        }
    });
    return tablero;
}

let laberinto = [[1,0,1,0,1],
                 [1,0,1,0,1],
                 [0,0,0,0,0],
                 [1,0,1,0,0],
                 [0,0,0,0,1]]
console.log(marcar_inicio(laberinto));
console.log(marcar_final(laberinto));
console.log(laberinto);