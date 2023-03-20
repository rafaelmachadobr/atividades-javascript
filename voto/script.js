const anoNascimento = Number(prompt("Digite o ano de nascimento:"));
const anoAtual = new Date().getFullYear();
const idade = anoAtual - anoNascimento;

if (anoNascimento > anoAtual || anoNascimento < 1900) {
  alert("Ano de nascimento inválido!");
  document.write("Ano de nascimento inválido!");
} else {
  document.write("Você tem " + idade + " anos.<br>");
  if (idade >= 18) {
    alert("Você é obrigado a votar!");
    document.write("Você é obrigado a votar!");
  } else if (idade >= 16) {
    alert("Você pode votar, mas não é obrigatório!");
    document.write("Você pode votar, mas não é obrigatório!");
  } else {
    alert("Você não pode votar!");
    document.write("Você não pode votar!");
  }
}
