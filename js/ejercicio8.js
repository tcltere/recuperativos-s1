/*Dado un arreglo y un número, retornar el índice (posición) del número. */

function retornarI(arr, num) {
  if (arr.includes(num)) {//busca si el numeroesta en el arreglo
    var indice = arr.indexOf(num);//devuelve la posicion
  } else {
    indice = "no esta dentro del arreglo";//si no lo encuetra devuelve que no esta
  }
  return indice;
}

retornarI([1, 2, 3, 4], 5);