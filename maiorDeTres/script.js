const num1 = Number(prompt("Digite o primeiro número: "));
const num2 = Number(prompt("Digite o segundo número: "));
const num3 = Number(prompt("Digite o terceiro número: "));

if (num1 > num2 && num1 > num3) {
  alert(`O maior número é ${num1}`);
  document.write(`O maior número é ${num1}`);
} else if (num2 > num1 && num2 > num3) {
  alert(`O maior número é ${num2}`);
  document.write(`O maior número é ${num2}`);
} else if (num3 > num1 && num3 > num2) {
  alert(`O maior número é ${num3}`);
  document.write(`O maior número é ${num3}`);
} else {
  alert("Os números são iguais");
  document.write("Os números são iguais");
}
