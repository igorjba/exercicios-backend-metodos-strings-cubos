const numeroCartao = '1111222233334444';

let cartaoTermo1 = numeroCartao.slice(0, 4);
let cartaoTermo2 = numeroCartao.slice(12, 16);

let cartao = cartaoTermo1 + cartaoTermo2.padStart(12, "*");

console.log(cartao);
