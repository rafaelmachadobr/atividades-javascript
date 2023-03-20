let numeros = 0;

for (let i = 0; i < 10; i++) {
  let numero = Number(prompt("Digite um número: "));
  numeros += numero;
}

alert(`A soma dos números é ${numeros}`);
document.write(`A soma dos números é ${numeros}`);