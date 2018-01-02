//elementos adyacentes encontrar la suma mayor
function sumar(arr) {
  var nuewArray = [];//variable guarda el resultado
  var suma = 0;//guarda cada suma
  for (var i = 0; i < arr.length - 1; i++) {//for para recorrer el arreglo
    suma = arr[i] + arr[i + 1];//se suma
    nuewArray.push(suma);//el nuevo array con la suma 
  }
  return Math.max.apply(null, nuevoArray);//busca el numero mayor dentro del array
}

sumar([4, 8, 1, 2, 3, 6])