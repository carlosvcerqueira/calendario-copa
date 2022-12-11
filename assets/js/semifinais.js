function createGame(player1, hour, player2) {
  return `
    <li>
        <img src="assets/icons/icon-${player1}.svg" alt="Bandeira da ${player1}">
        <strong>${hour}</strong>
        <img src="assets/icons/icon-${player2}.svg" alt="Bandeira de ${player2}">
    </li>
  `
}

let delay = -0.2
function createCard(date, day, games) {
  delay = delay + 0.2
  return `
    <div class="card" style="animation-delay: ${delay}s">
          <h2>${date}<span>${day}</span></h2>
          <ul>
              ${games}
          </ul>
    </div>
  `
}

document.querySelector("#cards").innerHTML =
  createCard("13/12", "terça", createGame("argentina", "16:00", "croatia")) +
  createCard("14/12", "quarta", createGame("france", "16:00", "marocco"))
