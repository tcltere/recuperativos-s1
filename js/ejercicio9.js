//Dados dos arreglos, devolver un nuevo arreglo que contenga la suma de los índices de cada array
function sumar(arr1, arr2) {
  var nuewArray = [];//guardo el arreglo de la suma
  var suma = 0;//uardo cada suma

  for (var i = 0; i < arr1.length; i++) {//recorro con for
    for (var j = 0; j < arr2.length; j++) {//recooro segundo arr
      suma = arr1[i] + arr2[i];//se suman los indices
    }
    nuewArray.push(suma);//se agregan lassumas al array nuevo
  }
  return nuewArray;
}

sumar([1, 2, 3, 5], [5, 6, 7, 8]);