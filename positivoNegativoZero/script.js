const numero = Number(prompt("Digite um número: "));
if (numero > 0) {
  alert("O número é positivo");
} else if (numero < 0) {
  alert("O número é negativo");
} else {
  alert("O número é zero");
}
document.write("O número digitado foi: " + numero);
