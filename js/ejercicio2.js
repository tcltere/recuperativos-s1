//verificar se el erreglo esta ordenaso de manor a mayor ejercicio 2
var arr1 = [8, 6, 5, 4, 1, 9];  
var arr2 = [2, 4, 6, 8, 10, 12]; //variable cun numeros ordenados

function ordenar(arr) { 
  var devolver = true;
  for (var i = 0; i <= arr.length; i++) {//for para recorrer el arreglo
    if (arr[i] > arr[i + 1]) {//el if condiciona si el primero es mayor devuelve falses
      devolver = false;
    }
  }
  return devolver;
}

ordenar([8, 6, 5, 4, 1, 9]);