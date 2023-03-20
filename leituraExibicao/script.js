let numeros = 0;

for (let i = 0; i < 10; i++) {
  let numero = Number(prompt("Digite um número: "));
  numeros += numero;
}

media = numeros / 10;

alert(`A média dos números é ${media}`);
document.write(`A média dos números é ${media}`);