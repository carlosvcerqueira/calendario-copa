function createGame(player1, hour, player2) {
  return `
    <li>
        <img src="assets/icons/icon-${player1}.svg" alt="Bandeira da ${player1}">
        <strong>${hour}</strong>
        <img src="assets/icons/icon-${player2}.svg" alt="Bandeira de ${player2}">
    </li>
  `
}

let delay = -0.4
function createCard(date, day, games) {
  delay = delay + 0.4
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
    "03/12",
    "sábado",
    createGame("netherlands", "12:00", "usa") +
      createGame("default", "16:00", "default")
  ) +
  createCard(
    "04/12",
    "domingo",
    createGame("default", "12:00", "default") +
      createGame("england", "16:00", "senegal")
  ) +
  createCard(
    "05/12",
    "segunda",
    createGame("default", "12:00", "default") +
      createGame("default", "16:00", "default")
  ) +
  createCard(
    "06/12",
    "terça",
    createGame("default", "12:00", "default") +
      createGame("default", "16:00", "default")
  )