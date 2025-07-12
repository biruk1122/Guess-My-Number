// "use strict"
// document.querySelector(".message").textContent = "🎉correct number"
// document.querySelector(".number").textContent = "13"
// document.querySelector(".score").textContent = "10"

// document.querySelector(".guess").value = 23
// console.log(document.querySelector(".guess").value)

let secretNumber = Math.trunc(Math.random() * 20) + 1
let score = 20
let highScore = 0

const displayMessage = function (message) {
  document.querySelector(".message").textContent = message
}

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value)
  console.log(guess, typeof guess)

  //when there is no input
  if (!guess) {
    displayMessage("🤔 No number!")
    // document.querySelector(".message").textContent = "🤔 No number!"

    //when player wins
  } else if (guess === secretNumber) {
    displayMessage("🎉 Correct Number")
    //document.querySelector(".message").textContent = "🎉 Correct Number"
    document.querySelector(".number").textContent = secretNumber

    document.querySelector("body").style.backgroundColor = "#60b374"

    document.querySelector(".number").style.width = "30rem"

    if (score > highScore) {
      highScore = score
      document.querySelector(".highscore").textContent = highScore
    }

    // when guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? "📈 To High" : "📉 To Low")
      //   document.querySelector(".message").textContent =
      //     guess > secretNumber ? "📈 To High" : "📉 To Low"
      score--
      displayMessage("🧨 You Lost the Game")
      // document.querySelector(".message").textContent = "🧨 You Lost the Game"
      document.querySelector(".score").textContent = 0
    }
  }

  //     //when guess is to High
  //   } else if (guess > secretNumber) {
  //     if (score > 1) {
  //       document.querySelector(".message").textContent = "📈 Too High"
  //       score--
  //       document.querySelector(".score").textContent = score
  //     } else {
  //       document.querySelector(".message").textContent = "🧨 You have lost"
  //       document.querySelector(".score").textContent = 0
  //     }

  //     //when guess is to low
  //   } else if (guess < secretNumber) {
  //     if (score > 1) {
  //       document.querySelector(".message").textContent = "📉 Too Low"
  //       score--
  //       document.querySelector(".score").textContent = score
  //     } else {
  //       document.querySelector(".message").textContent = "🧨 You have lost"
  //       document.querySelector(".score").textContent = 0
  //     }
  //   }
})

document.querySelector(".again").addEventListener("click", function () {
  score = 20
  secretNumber = Math.trunc(Math.random() * 20) + 1

  displayMessage("Start guessing...")
  //document.querySelector(".message").textContent = "Start guessing..."
  document.querySelector(".score").textContent = score
  document.querySelector(".number").textContent = "?"
  document.querySelector(".guess").value = ""
  document.querySelector("body").style.backgroundColor = "#222"
  document.querySelector(".number").style.width = "15rem"
})
