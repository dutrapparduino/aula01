const precosLivros = [25, 15, 30, 50, 20];
let maisBarato = 0;
for (let atual = 0; atual < precosLivros.length; atual++) {

if (precosLivros[atual] < precosLivros[maisBarato]) {
    maisBarato = atual
}
}
console.log('o livro mais barato  ${precosLivros[maisBarato]}')