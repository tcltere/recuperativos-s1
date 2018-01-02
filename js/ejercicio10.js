//dada la lista de amigos asignar asiento

function buscar (name){
  var name = prompt("Ingresa el nombre");//con el prompt pido que ingrese un mombre y lo guardo en esta var
  var list = ["Allison", "Belén", "Nadia", "Marcia", "Ale", "Fabián"] 
  for(var i = 0; i < lista.length; i++){//recorro el arreglo con for
    if(list[i] === name) {//si i es igual igual al nombre ingresado le da posicion
      return i+1;
  }
  
  }
  return 0;
}
console.log(buscar());