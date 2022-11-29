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
  createCard(
    "09/12",
    "sexta",
    createGame("default", "12:00", "default") +
      createGame("default", "16:00", "default")
  ) +
  createCard(
    "10/12",
    "sábado",
    createGame("default", "12:00", "default") +
      createGame("default", "16:00", "default")
  ) 