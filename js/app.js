var sentence = prompt("Ingrese frase");
var ascii = 0;

function cipher (sentence, newSentence){
  for(var i=0; i<sentence.length; i++){
    ascii = ((sentence.charCodeAt(i) -65 + 33) % 26 + 65);
   if(asci >=65 && assci <= 90 || ascii >=97 && asci <=122){
    newSentence = String.fromCharCode(ascii);
   } 
  }
  return newSentence;
}

cipher(sentence,newSentence);
