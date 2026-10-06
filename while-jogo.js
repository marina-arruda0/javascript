let resultadoDado;
let lancamento = 0;
while (lancamento < 5) {
    resultadoDado = Math.floor(Math.random() * 6) + 1; // Gera um número aleatório entre 1 e 6
    lancamento++; 
    console.log(`Lançamento ${lancamento}: Resultado do dado : ${resultadoDado}`);
}

console.log(`Finalmente! O número 6 foi obtido após ${lancamento} lançamentos.`);