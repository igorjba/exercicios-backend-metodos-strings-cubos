const email = "aluno@cubos.academy";

function verificarEmail(enderecoEmail) {
    if (enderecoEmail.includes("@")) {

        if (enderecoEmail.includes(".")) {

            for (let i = 0; i < enderecoEmail.length; i++) {

                if (enderecoEmail[enderecoEmail.length] === (".") || enderecoEmail[0] === ".") {

                    return console.log("E-mail inválido");

                } else {

                    if (enderecoEmail.indexOf(".", enderecoEmail.indexOf("@"))) {

                        return console.log("E-mail válido");

                    } else {

                        return console.log("E-mail inválido");

                    }

                }
            }
        } else {

            return console.log("E-mail inválido");

        }

    } else {

        return console.log("E-mail inválido");

    }
}

verificarEmail(email);