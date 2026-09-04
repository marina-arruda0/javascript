function exemploConst() {
    const x = 10;
    console.log(x); // 10 
    // x = 20; // Isto causaria um erro, pois x é uma constante e não pode ser reatribuída
    if (true) {
        const y = 30; 
        console.log(y); // 30 
    console.log(x); // 10 (o valor não foi alterado)
}
// console.log(y); // Isto causaria um erro, pois y não está definido fora do bloco
}
exemploVar();