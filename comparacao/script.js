const num1 = Number(prompt("Digite o primeiro número:"));
const num2 = Number(prompt("Digite o segundo número:"));

if (num1 === num2) {
  alert("Números iguais");
} else if (num1 > num2) {
  alert("Primeiro é maior");
} else {
  alert("Segundo maior");
}
