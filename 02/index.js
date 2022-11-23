const cpf = "12345678900";
const cnpj = "12345678000199";

if (cpf.length === 11) {
    cpfTermo1 = cpf.slice(0, 3);
    cpfTermo2 = cpf.slice(3, 6);
    cpfTermo3 = cpf.slice(6, 9);
    cpfTermo4 = cpf.slice(9);
    console.log(`${cpfTermo1}.${cpfTermo2}.${cpfTermo3}-${cpfTermo4}`);
} else {
    console.log("CPF Inválido");
}

if (cnpj.length === 14) {
    cnpjTermo1 = cnpj.slice(0, 2);
    cnpjTermo2 = cnpj.slice(2, 5);
    cnpjTermo3 = cnpj.slice(5, 8);
    cnpjTermo4 = cnpj.slice(8, 12);
    cnpjTermo5 = cnpj.slice(12, 14);
    console.log(`${cnpjTermo1}.${cnpjTermo2}.${cnpjTermo3}/${cnpjTermo4}-${cnpjTermo5}`);
} else {
    console.log("CNPJ Inválido");
}
