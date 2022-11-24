const nomeArquivo = 'Foto da Familia.jpg';

function validacaoDeArquivos(arquivo) {

    const tiposDeArquivos = ["jpg", "jpeg", "gif", "png"];

    let indice = arquivo.length - 4;

    let indiceDoPonto = arquivo.indexOf(".", indice);

    let arquivoValido = false;

    if (indiceDoPonto === indice) {

        let tipoDeAquivo = nomeArquivo.slice(indice + 1);

        for (let i = 0; i < tiposDeArquivos.length; i++) {

            if (tipoDeAquivo === tiposDeArquivos[i]) {

                arquivoValido = true;

            } else {

                arquivoValido = false;

            }
        }

    } else {

        arquivoValido = false;

    }
    if (arquivoValido === true) {

        return console.log("Arquivo válido");

    } else {

        return console.log("Arquivo inválido");

    }
}

validacaoDeArquivos(nomeArquivo);