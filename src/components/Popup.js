import React from "react"

function checkWin(correct, wrong, word) {
  let status = "win"

  //check for win
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

export const changeButtonsClass = () => {
  const btnArr = document.getElementsByName("alphabetKey")
  Array.from(btnArr).forEach((btn) => {
    console.log(btn.className)
    btn.className = "keys"
  })
}

const Popup = ({ correctLetters, wrongLetters, selectedWord, playAgain }) => {
  let finalMessage = ""
  let wordReveal = ""

  if (checkWin(correctLetters, wrongLetters, selectedWord) === "win") {
    changeButtonsClass()
    finalMessage = "Congratulations!! You guessed it Right !! "
  } else if (checkWin(correctLetters, wrongLetters, selectedWord) === "lose") {
    changeButtonsClass()
    finalMessage = "Unfortunately you did not guess it right"
    wordReveal = `...the word was: ${selectedWord}`
  }

  return (
    <div
      className="container"
      style={finalMessage !== "" ? { display: "flex" } : {}}
    >
      <div className="popup">
        <h2>{finalMessage}</h2>
        <h3>{wordReveal}</h3>
        <button onClick={playAgain}>Play Again</button>
      </div>
    </div>
  )
}

export default Popup
