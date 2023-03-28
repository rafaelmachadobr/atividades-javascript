let nota = prompt("Digite a sua nota: ");

    while (!(nota >= 0 && nota <= 10)) {
        alert("Nota invalida!");
        nota = prompt("Digite a sua nota: ");
    }

    document.write(nota);