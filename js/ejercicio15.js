//Dado un arreglo de 4 números positivos, devolver un nuevo arreglo con cada elemento multiplicado por 12.

var arr = [1,2,3,4];
 var nevoArreglo = [];//variable que guarda el arreglo nuevo

 for(var i = 0; i < arr.length; i++){//recorre arreglo
    var multiplicar = arr[i]*12;//multiplica

    nevoArreglo.push(multiplicar);//agrega al arreglo nuevo el resultado

 };

 console.log(arr);
 console.log(nevoArreglo);
 