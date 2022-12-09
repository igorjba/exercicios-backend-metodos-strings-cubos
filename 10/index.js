const nomeArquivo = 'Foto da Familia.jpg';

function validarArquivo(arquivo) {
    const extensao = arquivo.slice(arquivo.lastIndexOf("."));

    if (extensao === ".jpg" || extensao === ".jpeg" || extensao === ".git" || extensao === ".png") {
        console.log("Arquivo válido");
    } else {
        console.log("Arquivo inválido");
    }
}
validarArquivo(nomeArquivo);