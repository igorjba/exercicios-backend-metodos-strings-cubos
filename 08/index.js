const cpf = "011022.03344";

const removerPontuacao = (numero) => {
    while (numero !== numero.replace(".", "").replace("-", "").replace("/", "")) { //while = enquanto
        numero = numero.replace(".", "").replace("-", "").replace("/", "");
    }
    return console.log(numero);
}
removerPontuacao(cpf);