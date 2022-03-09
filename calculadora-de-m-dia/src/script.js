function Registrar() {
  var notaDoPrimeiroBimestre = parseFloat(document.getElementById("valor1").value);
 
  var notaDoSegundoBimestre = parseFloat(document.getElementById("valor2").value);
  
  var notaDoTerceiroBimestre = parseFloat(document.getElementById("valor3").value);
  
  var notaDoQuartoBimestre = parseFloat(document.getElementById("valor4").value);
  
  var soma = notaDoPrimeiroBimestre + notaDoSegundoBimestre + notaDoTerceiroBimestre + notaDoQuartoBimestre
  var valorFinal = soma / 4
  var notaFixada = valorFinal.toFixed (1)
  console.log(notaFixada)
 
  var texto = "Bem vindo(a)! Sua média foi " + notaFixada
  console.log(texto)
 
  if (notaFixada > 7.0) {
  texto = texto + " Parabens você foi aprovado(a)!!"
} 
else {
  texto = texto + " Infelizmente foi reprovado(a), estude mais!"
}
  console.log(texto)
  
  var p = document.createElement("p");
  p.textContent = texto;
  p.className="page-subtitle"
  document.getElementById("container").appendChild(p);


}
  
  
//revisão
//variáveis, string, console.log, toFixed,operações matemáticas, concatenação
