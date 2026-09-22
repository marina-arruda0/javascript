let quartosDisponiveis = 5;
let reservaConfirmada = true;

let statusReserva = (reservaConfirmada && quartosDisponiveis > 0) ? "Reserva confirmada!" 
: (quartosDisponiveis === 0) ? "aguardandp confirmação"
:"sem quartos dispo''niveis";

console.log(statusReserva); // Saída: "Reserva confirmada!"