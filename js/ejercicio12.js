//palindroma o no 
function palindrome (word){
  var word = prompt("ingrese palabra") //pregunta palabre
  var long = word.length;//longitud de palabra
  
  for (var i = 0; i< long; i++){//recorre palabra
    if(word[i] !== word[long-1-i]){//si word es distinto de longitud retur faslse, sino vredadero
      return false;
    }else{
      return true;

    }
  } 
}
 console.log(palindrome());
