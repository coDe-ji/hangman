/**
 * The Popup component is displayed when the game is over and the user has either won or lost
 */

function checkWin(correct, wrong, word) {
  let status = "win"

  word.split("").forEach((letter) => {
    if (!correct.includes(letter)) {
      status = ""
    }
  })

  if (wrong.length >= 11) {
    status = "lose"
  }

  return status
}

//function to change button class when the game is done to reset the default settings
export const changeButtonsClass = () => {
  const btnArr = document.getElementsByName("alphabetKey")
  Array.from(btnArr).forEach((btn) => {
    btn.className = "keys"
    btn.disabled = false
  })
}

//Popup Component
const Popup = ({
  correctLetters,
  wrongLetters,
  selectedWord,
  playAgain,
  exitGame,
}) => {
  let finalMessage = ""
  let wordReveal = ""

  // call the function created above to check if the user has won or lost and display the appropriate message
  if (checkWin(correctLetters, wrongLetters, selectedWord) === "win") {
    changeButtonsClass()
    finalMessage = "Congratulations!! You guessed it Right"
  } else if (checkWin(correctLetters, wrongLetters, selectedWord) === "lose") {
    changeButtonsClass()
    finalMessage = "Unfortunately you did not guess it right"
    wordReveal = `...the word was: ${selectedWord}`
  }
  //return the div displaying the popup box notifying the user if they won or lost
  return (
    <div
      className="container"
      style={finalMessage !== "" ? { display: "flex" } : {}}
    >
      <div className="popup">
        <h2>{finalMessage}</h2>
        <h3>{wordReveal}</h3>
        <button onClick={playAgain}>Play Again</button>
        <button onClick={exitGame}>Exit</button>
      </div>
    </div>
  )
}

export default Popup
