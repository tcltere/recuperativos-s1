/*Dado un arreglo y un número, verificar si el número se encuentra en el arreglo. En caso de ya existir
 deberá retornar el arreglo sin cambios, en caso contrario retornar el arreglo nuevo con el número ingresado*/
function encontrar(arr, num) {
  if (!arr.includes(num)) {//includes ve esi el elemento esta en el array
    arr.push(num);//si no esta el elemento dentro del array, lo agrega con push/
  }
  return arr;
}

encontrar([1, 2, 3, 4], 4)