const celular = "97188880";
const celular2 = "71999231564"


function formatarNumeroCelular(telefone) {
    if (telefone.length == 11) {

        let = termo1Tel = telefone.slice(0, 2);
        let = termo2Tel = telefone.slice(2, 3);
        let = termo3Tel = telefone.slice(3, 7);
        let = termo4Tel = telefone.slice(7);

        telefone = `(${termo1Tel}) ${termo2Tel} ${termo3Tel}-${termo4Tel}`;

        return console.log(telefone);

    } else {

        if (telefone.length == 8) {

            let = termo1Tel = telefone.slice(0, 4);
            let = termo2Tel = telefone.slice(4);

            telefone = `9 ` + termo1Tel + "-" + termo2Tel;

            return console.log(telefone);

        }
    }
}

//telefone será substituido por qualquer valor ou variavel
//formatarNumeroCelular("713216547");
formatarNumeroCelular(celular);
formatarNumeroCelular(celular2);
