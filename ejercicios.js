//Ejercicio 1: De Mily Mendoza
function capicua_numero(n){
var n = 0;
var diferente = 0;
n = prompt("Digite um numero : ");
for (var i = 0; i < n.length; i ++){
  
  if (n.charAt(i) == n.charAt(n.length -1 -i)){
   }
  else{
    diferente = 1;
  }  
}
if(diferente == 0){
  document.writeln(" * El número digitado es Capicua!");   
 }
 else{
  document.writeln(" * El número digitado no es Capicua!");
 }
}
capicua_numero();

//ejercicio 2 de GLADYS
function potencia(numero,exponente){
resultado=Math.pow(numero,exponente); //La función  Math.pow() devuelve la  base elevada al exponente , esto es, baseexponente
return resultado;
}
console.log(potencia(5,2));

//ejercicio 3 de Esther

var array =["murcielago","pato","caballo","zebra"];
var unir = array.join("");
var separar = unir.split("");
//console.log(separar);
var c = "a";
function contarLetra(separar,c){
  var caracter=0;
  for (var i = 0; i < separar.length; i++){
//console.log(array);
      if(c == separar[i]){
        caracter += 1;
      }
  }
console.log(caracter);
}
contarLetra(separar,c)

//mariley 
//-----------------------------ejericcio 4
console.log("ejercicios 4")
function ejercicio4(string){
  var cadena = string.split(" ");
  var  longitud = cadena.length;
  console.log(string);
  console.log("tiene "+longitud+" palabras \n")
}
ejercicio4("el mundo es tan cruel");

//Ejercicio 5 Gaby
function largo(arreglo)
{
    var mayor = 0;
    for(var i in arreglo)
    {
        if(arreglo[i].length > mayor)
            mayor = arreglo[i].length;
    }
    return mayor;
}