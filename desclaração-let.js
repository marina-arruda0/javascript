function exemploLet() {
    console.log(x); 
    let x = 10;
    if (true) {
        let x = 20; // uma nova variável 'x' é criada dentro do bloco
        console.log(x); // 20 (valor da variável dentro do bloco)
    }
    console.log(x); // 10 (fora do bloco)
}

exemploLet();