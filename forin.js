const carro = {
    marca: "Toyota",
    modelo: "Corolla",
    ano: 2020,
    cor: "Prata"
};
for (const chave in carro) {
    console.log(`${chave}: ${carro[chave]}`);
}