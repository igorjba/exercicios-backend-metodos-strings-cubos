const nome = 'Guido';

function criarNick(nomeOriginal) {

    function retirarEspacos(nomeOriginal) {
        const nomeJuntoMinusculo = nomeOriginal.trim().toLowerCase();
        if (nomeOriginal.includes(" ")) {
            while (nomeJuntoMinusculo !== nomeJuntoMinusculo.replace(" ", "")) {
                nomeJuntoMinusculo = nomeJuntoMinusculo.replace(" ", "")
                nomeTudoJunto = nomeJuntoMinusculo;
            }
        } else {
            nomeTudoJunto = nomeJuntoMinusculo;
        }
    }

    let nomeTudoJunto

    retirarEspacos(nomeOriginal)

    if (nomeOriginal.length > 0 && nomeOriginal.length <= 13) {

        if (nomeTudoJunto.length < 12) {

            let nomeJuntoMinusculo12Carac = nomeTudoJunto.padEnd(12, (Math.floor(Math.random() * 10)));

            return console.log(`@${nomeJuntoMinusculo12Carac}`);

        } else {

            return console.log(`@${nomeTudoJunto}`);
        }

    } else {

        return console.log("Nome Inválido");

    }
}
criarNick(nome);

