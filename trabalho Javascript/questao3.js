let temperatura = 25;
let estaChovendo = true;

if (temperatura > 30 || !estaChovendo) {
  console.log("Vamos à praia!");
} else if (temperatura >= 20 && estaChovendo) {
  console.log("Vamos ao cinema!");
} else {
  console.log("Ficaremos em casa.");
}

// Resposta correta: B) Vamos ao cinema! 