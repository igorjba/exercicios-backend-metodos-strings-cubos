const cpf = "011.022.03344";

function removerPontuacaoCpfCnpj(original, text, newText) {
    while (original !== original.replace(".", "")) { //while = enquanto
        original = original.replace(".", "");
    }
    while (original !== original.replace("-", "")) { //while = enquanto
        original = original.replace("-", "");
    }
    while (original !== original.replace("/", "")) { //while = enquanto
        original = original.replace("/", "");
    }
    return console.log(original);
}

removerPontuacaoCpfCnpj(cpf);