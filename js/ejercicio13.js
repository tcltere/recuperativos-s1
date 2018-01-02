//amagrama o no
function esAnagrama(palabra1, palabra2) {

   var palabra1 = prompt("Ingresa una palabra");//preguntar palabra
   var palabra2 = prompt("Ingresa otra palabra");//otra palabra

   var word1 = palabra1.split("").sort();//split separa la palbra en una  cadena y sort los ordena
   var word2 = palabra2.split("").sort();//lo mismo

   console.log(word1,word2)


   for (var i = 0; i < word1.length; i++) {//se recorre cadena con for
     var anagrama1 = word1[i];
   }

    for (var i = 0; i < word2.length; i++) {//lo mimso
     var anagrama2 = word2[i];
   }


    if (word1.length === word2.length && anagrama1 === anagrama2) {//su son iguales dice true si no false
     alert("true")
     } else{
      alert("false")
      }

};

console.log(esAnagrama());

