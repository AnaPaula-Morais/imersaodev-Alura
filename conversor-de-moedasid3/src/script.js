function Converter() {
  var valorElemento = document.getElementById("valor");
  var valor = valorElemento.value;
  var valorElementoEmRealNumerico = parseFloat(valor);
  var valorEmReal = valorElementoEmRealNumerico / 5.06;
  console.log(valorEmReal);
  var elementoValorConvertido = document.getElementById("valorConvertido");
  var valorConvertido = "O resultado em dolar é $ " + valorEmReal.toFixed(2);
  elementoValorConvertido.innerHTML = valorConvertido;
}
