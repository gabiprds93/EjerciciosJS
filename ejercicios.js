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