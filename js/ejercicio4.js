//Dado un arreglo de números positivos, encontrar el elemento más pequeño y retornar su índice. ejercicio4

function menor(arr) {
  var min = Math.min.apply(null, arr);//busca numero menor
  return arr.indexOf(min);//devuelve numero menor

}

menor([3, 2, 4, 6, 1]);