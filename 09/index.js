const nome = 'Guido';

function retirarEspacos(nomeOriginal) {
    if (nomeOriginal.includes(" ")) {
        while (nomeOriginal !== nomeOriginal.replace(" ", "")) {
            nomeOriginal = nomeOriginal.replace(" ", "")
            nomeTudoJunto = nomeOriginal;
        }
    } else {
        nomeTudoJunto = nomeOriginal;
    }

}

let nomeTudoJunto

function criarNick(nomeOriginal) {

    if (nomeOriginal.length > 0) {

        let nomeJuntoMinusculo = nomeTudoJunto.toLowerCase();

        if (nomeJuntoMinusculo.length < 12) {

            let nomeJuntoMinusculo12Carac = nomeJuntoMinusculo.padEnd(12, (Math.floor(Math.random() * 10)));

            return console.log(`@${nomeJuntoMinusculo12Carac}`);

        } else {

            nomeJuntoMinusculo = nomeJuntoMinusculo.slice(0, 12);

            return console.log(`@${nomeJuntoMinusculo}`);
        }



    } else {

        return console.log("Nome Inválido");

    }

}
retirarEspacos(nome)
criarNick(nome);

