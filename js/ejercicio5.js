//ado un arreglo de números positivos, encontrar el elemento más pequeño e intercambiarlo por el primer elemento del arreglo.ejercicio5


function menor(arr) {
  var min = Math.min.apply(null, arr);//busca numero menor
  var indice = arr.indexOf(min); //indice menor
  arr.splice(indice, 1);//splice indico el valor que quiero eliminar, 1 elemento con el uno.
  arr.unshift(min);//unshif agrega el valor minimo al preincipio del arraay
  return arr;

}

menor([3, 1, 4, 6, 5]);