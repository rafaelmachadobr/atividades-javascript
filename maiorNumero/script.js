const num1 = parseInt(prompt("Digite o primeiro número: "));
const num2 = parseInt(prompt("Digite o segundo número: "));

if (num1 > num2) {
  alert("O maior número é: " + num1);
} else if (num2 > num1) {
  alert("O maior número é: " + num2);
} else {
  alert("Os números são iguais");
}

document.write("O maior número é: " + Math.max(num1, num2));
