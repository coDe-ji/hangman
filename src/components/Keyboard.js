import "../style/index.css"

import React from "react"
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

let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

function Keys({ buttonClass, handleClick }) {
  return (
    <div>
      {
        //Create the keyboard
        alphabet.split("").map((letter, i) => {
          return (
            <button
              name="alphabetKey"
              className={buttonClass}
              key={letter}
              value={letter}
              onClick={handleClick}
            >
              {letter}
            </button>
          )
        })
      }
    </div>
  )
}

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
}) {
  //Function to handle when an alphabet key is clicked on
  const handleClick = (event) => {
    const value1 = event.target.value
    const value = value1.toLowerCase()

    if (randomWord.includes(value)) {
      if (!correctLetters.includes(value)) {
        setCorrectLetters((currentLetters) => [...currentLetters, value])
        event.target.className = "rightLetter"
      } else {
        showMessage()
      }
    } else {
      if (!wrongLetters.includes(value)) {
        setWrongLetters((currentLetters) => [...currentLetters, value])

        event.target.className = "wrongLetter"
        setGuessesLeft(guessesLeft - 1)

        switch (guessesLeft) {
          case 11:
            setHangImage(state1)
            break
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

  //render the components created above
  return (
    <div className="flex-container">
      <div className="keyboard">
        <Keys buttonClass={buttonClass} handleClick={handleClick} />
      </div>
      <div></div>
    </div>
  )
}

export default Keyboard
