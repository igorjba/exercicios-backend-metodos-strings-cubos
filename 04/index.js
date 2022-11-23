let identificador = "123";
let nome = "José silva costa";
let email = "      jose@email.com  ";

if (identificador.length < 6) {
    identificador = identificador.padStart(6, 0);

}
console.log(identificador);

const arrayDeNomes = nome.split(" ");

let nomeFormatado = "";

for (let item of arrayDeNomes) {
    let primeiraLetra = item.slice(0, 1);
    let restanteDoNome = item.slice(1);

    nomeFormatado += primeiraLetra.toUpperCase() + restanteDoNome + " ";

}
console.log(nomeFormatado.trim());

console.log(email.trim());

