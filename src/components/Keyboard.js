import "../style/index.css"
import dictionary from "../words/dictionary.txt"
import React, { useState, useEffect } from "react"
import Popup from "./Popup"
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

function Keys({ buttonClass, handleClick }) {
  return (
    <div>
      {
        //Create the keyboard
        alphabet.split("").map((letter, i) => {
          return (
            <button
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

let wordsArray = []
//Keyboard Component
function Keyboard() {
  const [correctLetters, setCorrectLetters] = useState([])
  const [wrongLetters, setWrongLetters] = useState([])
  const [guessesLeft, setGuessesLeft] = useState(11)
  const [randomWord, setRandomWord] = useState("")
  const [hangImage, setHangImage] = useState(state1)
  const [buttonClass, setButtonClass] = useState("keys")

  //generate a random word and set the variable, check if there is a word available to avoid generating multiple words.
  useEffect(() => {
    async function fetchRandomWord() {
      const response = await fetch(process.env.PUBLIC_URL + dictionary)
      const text = await response.text()
      wordsArray = text.split("\n")
      const randomIndex = Math.floor(Math.random() * wordsArray.length)
      let word = wordsArray[randomIndex]
      setRandomWord(word)
    }

    if (!randomWord) {
      fetchRandomWord()
    }
  }, [randomWord])

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

  //enable user restart the game
  function playAgain() {
    // Empty Arrays
    setButtonClass("keys")
    setCorrectLetters([])
    setWrongLetters([])
    setGuessesLeft(11)
    setHangImage(state1)

    const randomIndex = Math.floor(Math.random() * wordsArray.length)
    let word = wordsArray[randomIndex]
    setRandomWord(word)
  }

  //enable user restart the game
  function restart() {
    // Empty Arrays
    setButtonClass("keys")
    setCorrectLetters([])
    setWrongLetters([])
    setGuessesLeft(11)

    setHangImage(state1)

    const randomIndex = Math.floor(Math.random() * wordsArray.length)
    let word = wordsArray[randomIndex]
    setRandomWord(word)
  }

  //render the components created above
  return (
    <div className="flex-container">
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
        <button onClick={restart}>Restart</button>
      </div>
      <div className="Guess">
        <Word selectedWord={randomWord} correctLetters={correctLetters} />
      </div>

      <div className="keyboard">
        <Keys buttonClass={buttonClass} handleClick={handleClick} />
      </div>
      <div>
        <Popup
          correctLetters={correctLetters}
          wrongLetters={wrongLetters}
          selectedWord={randomWord}
          playAgain={playAgain}
        />
      </div>
    </div>
  )
}

export default Keyboard
