media = 0;

for (let i = 0; i < 4; i++) {
  let nota = parseFloat(prompt(`Digite á ${i + 1}ª nota: `));
  if (nota >= 0 && nota <= 10) {
    media += nota;
  } else {
    alert("Nota inválida!");
  }
}

media = media / 4;
alert(`A média é ${media}`);
document.write(`A média é ${media}`);
