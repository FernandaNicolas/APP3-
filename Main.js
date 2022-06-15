var _ = require("underscore");

// Se marcará el inicio del laberinto con un 2
function marcar_inicio(tablero){
    let flag = true;
    tablero = tablero.forEach(function(tabla){
        if(flag === true && tablero[tabla][0]=== 0){
            tablero[tabla][0] = 2;
            flag = false;
        }
    });
    return tablero;
}
// Se marcará el final del laberinto con un 3
function  marcar_final(tablero){
    let flag = true;
    tablero = tablero.forEach(function(tabla){
        if(flag === true && tablero[tabla][tabla.length-1]=== 0){
            tablero[tabla][tabla.length-1] = 3;
            flag = false;
        }
    });
    return tablero;
}

let laberinto = [[],[],[],[],[]]