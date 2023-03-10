import "../style/index.css" //stylesheet
//hangman state images
import state1 from "../hangmandrawings/state1.GIF"
import state2 from "../hangmandrawings/state2.GIF"
import state3 from "../hangmandrawings/state3.GIF"
import state4 from "../hangmandrawings/state4.GIF"
import state5 from "../hangmandrawings/state5.GIF"
import state6 from "../hangmandrawings/state6.GIF"
import state7 from "../hangmandrawings/state7.GIF"
import state8 from "../hangmandrawings/state8.GIF"
import state9 from "../hangmandrawings/state9.GIF"
import state10 from "../hangmandrawings/state10.gif"
import state11 from "../hangmandrawings/state11.GIF"

//varibale holding each letter in the alphabet
let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

function Keys({ buttonClass, handleClick, disabled }) {
  return (
    <div>
      {
        //Create the keyboard by making a button for each letter in the variale and assigning them the follwoing props
        alphabet.split("").map((letter, i) => {
          return (
            <button
              name="alphabetKey"
              className={buttonClass}
              key={letter}
              value={letter}
              onClick={handleClick}
              disabled={disabled}
            >
              {letter}
            </button>
          )
        })
      }
    </div>
  )
}

//Notify the user if they try to click a button twice
function showMessage() {
  return (
    <div className="notif">
      <h5>this has been clciked already</h5>
    </div>
  )
}

//Keyboard Component
function Keyboard({
  randomWord,
  correctLetters,
  setCorrectLetters,
  wrongLetters,
  setWrongLetters,
  setHangImage,
  guessesLeft,
  setGuessesLeft,
  buttonClass,
  disabled,
}) {
  //Function to handle when an alphabet key is clicked on
  const handleClick = (event) => {
    const value1 = event.target.value
    const value = value1.toLowerCase()

    // Check if the letter clciked is in the word, if it is check if it is in the correct letters array if not add it to it and change the classname so the user can kow if the letter is right or wrong.
    if (randomWord.includes(value)) {
      if (!correctLetters.includes(value)) {
        setCorrectLetters((currentLetters) => [...currentLetters, value])
        event.target.className = "rightLetter"
      } else {
        showMessage()
      }

      /**
       * if the letter is not in the word, check if it is in the wrong letter array and add it to it then change the classname.
       * Update the state of the guesses left and change the hangman image
       */
    } else {
      if (!wrongLetters.includes(value)) {
        setWrongLetters((currentLetters) => [...currentLetters, value])

        event.target.className = "wrongLetter"
        setGuessesLeft(guessesLeft - 1)

        switch (guessesLeft) {
          case 10:
            setHangImage(state2)
            break
          case 9:
            setHangImage(state3)
            break
          case 8:
            setHangImage(state4)
            break
          case 7:
            setHangImage(state5)
            break
          case 6:
            setHangImage(state6)
            break
          case 5:
            setHangImage(state7)
            break
          case 4:
            setHangImage(state8)
            break
          case 3:
            setHangImage(state9)
            break
          case 2:
            setHangImage(state10)
            break
          case 1:
            setHangImage(state11)
            break
          default:
            setHangImage(state1)
        }
      } else {
        showMessage()
      }
    }
  }

  //render the component created above
  return (
    <div className="flex-container">
      <div className="keyboard">
        <Keys
          buttonClass={buttonClass}
          handleClick={handleClick}
          disabled={disabled}
        />
      </div>
      <div></div>
    </div>
  )
}

export default Keyboard
