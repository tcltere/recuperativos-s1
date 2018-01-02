//rotar elemento a la derecha ejercicio 1
function rotarElementos(array, n){
 for(i=0; i< n; i++){ //se recorre el arreglo con el for
   var elements = array.pop(); //.pop elimina el ultimo array .
   array.unshift(elements) //Agrega elementos al inicio.
 };
 return array;
};
var arr = [1, 2, 3, 4, 5, 6, 7];
rotarElementos(arr, 3);