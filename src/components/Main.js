//Component to display the word to be guessed
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

function Main({ randomWord, guessesLeft, hangImage, correctLetters }) {
  //render the main components below

  return (
    <div>
      <div className="hangGuess">
        <div>
          <img
            className="hangImage"
            src={hangImage}
            alt="hangman depiction"
          ></img>
        </div>
        <div>
          <h3>Guesses Left: {guessesLeft}</h3>
        </div>
      </div>
      <div className="Guess">
        <Word selectedWord={randomWord} correctLetters={correctLetters} />
      </div>
    </div>
  )
}

export default Main
