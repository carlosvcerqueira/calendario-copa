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
    "03/12",
    "sábado",
    createGame("netherlands", "12:00", "usa") +
      createGame("argentina", "16:00", "australia")
  ) +
  createCard(
    "04/12",
    "domingo",
    createGame("france", "12:00", "poland") +
      createGame("england", "16:00", "senegal")
  ) +
  createCard(
    "05/12",
    "segunda",
    createGame("japan", "12:00", "croatia") +
      createGame("brazil", "16:00", "south-korea")
  ) +
  createCard(
    "06/12",
    "terça",
    createGame("marocco", "12:00", "spain") +
      createGame("switzerland", "16:00", "portugal")
  )