/**
 * Main component holds the major components pertaining to the game. The different hnagman images at different points in the game, the guesses the player has left,
 * and the word to be guessed by the player.
 */

/**
 * The word component takes in two props, one of them the word to be guessed and an arry which holds the correct letters.
 * we check if each letter in the selected word is in the array, if it is we display the word if not we display an empty dash.
 */
function Word({ selectedWord, correctLetters }) {
  return (
    <div>
      {selectedWord.split("").map((letter, i) => {
        return (
          <span className="letter" key={i}>
            {correctLetters.includes(letter) ? letter : "_"}
          </span>
        )
      })}
    </div>
  )
}

/**
 * The Main component takes in different props for the images, correctleters array and guesses left
 */
function Main({ randomWord, guessesLeft, hangImage, correctLetters }) {
  return (
    <div>
      {/* div holding the current hangman image */}
      <div className="hangGuess">
        <div className="stateImage">
          <img
            className="hangImage"
            src={hangImage}
            alt="hangman depiction"
          ></img>
        </div>
        {/* div holding the amount of guesses the player has left */}
        <div className="guessLeft">
          <h3>Guesses Left: {guessesLeft}</h3>
        </div>
      </div>
      {/* Div to display the word the player is guessing */}
      <div className="Guess">
        <Word selectedWord={randomWord} correctLetters={correctLetters} />
      </div>
    </div>
  )
}

export default Main
