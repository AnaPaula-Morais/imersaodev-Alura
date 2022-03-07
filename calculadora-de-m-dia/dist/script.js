var nome = "Maria"

var notaDoPrimeiroBimestre = 9
var notaDoSegundoBimestre = 7
var notaDoTerceiroBimestre = 4
var notaDoQuartoBimestre = 2

var soma = notaDoPrimeiroBimestre + notaDoSegundoBimestre + notaDoTerceiroBimestre + notaDoQuartoBimestre
var notaFinal = soma / 4
var notaFixada = notaFinal.toFixed (1)
var texto = "Bem vinda! " + nome + " sua média foi " + notaFixada
//console.log(texto)
if (notaFixada > 7.0) {
  texto = texto + " Parabens você foi aprovada!!"
} else {
  texto = texto + " Infelizmente foi reprovada, estude mais!"
}
console.log(texto)

var p = document.createElement("p");
p.textContent = texto;
p.className="page-subtitle"
document.getElementById("container").appendChild(p);


//revisão
//variáveis, string, console.log, toFixed,operações matemáticas, concatenação