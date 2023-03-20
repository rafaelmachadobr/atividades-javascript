soma = 0;

for (let i = 0; i < 6; i++) {
  let numero = Number(prompt("Digite um número: "));
  if (numero < 72) {
    soma += numero;
  }
}

alert(`A soma dos números é ${soma}`);
document.write(`A soma dos números é ${soma}`);
