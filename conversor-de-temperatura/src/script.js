function Converter() {
  var valorDigitado = document.getElementById("valor");
  var valor = valorDigitado.value;
  var valorDigitadoNumerico = parseFloat(valor);

  var valorEmFahrenheit = valorDigitadoNumerico * 1.8 + 32;
  console.log(valorEmFahrenheit);

  var elementoValorConvertido = document.getElementById("valorConvertido");
  var valorConvertido =
    "O resultado em Fahrenheit é " + valorEmFahrenheit + " F";

  elementoValorConvertido.innerHTML = valorConvertido;
}
