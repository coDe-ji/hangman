import "./App.css"
import Header from "./components/Header"
import Keyboard from "./components/Keyboard"
import Main from "./components/Main"
import Popup from "./components/Popup"
import React, { useState } from "react"
import state1 from "./hangmandrawings/state1.GIF"
import dictionary from "./words/dictionary.txt"
import { changeButtonsClass } from "../src/components/Popup"

//array to hold all the words to be randomised
let wordsArray = []

//Component to render the app
function App() {
  const [correctLetters, setCorrectLetters] = useState([]) //state for the correct letters
  const [wrongLetters, setWrongLetters] = useState([]) //state for the wrong letters
  const [guessesLeft, setGuessesLeft] = useState(11) //state for the guesses left
  const [randomWord, setRandomWord] = useState("") //state for the random word selected
  const [hangImage, setHangImage] = useState(state1) //state for the hangman image
  const [buttonClass, setButtonClass] = useState("keys") //state for the button class fo each alphabet key
  const [disabled, setDisabled] = useState(false) //state for the alphabets to be disabled or not

  //generate a random word and set the variable, check if there is a word available to avoid generating multiple words.
  async function fetchRandomWord() {
    const response = await fetch(process.env.PUBLIC_URL + dictionary)
    const text = await response.text()
    wordsArray = text.split("\n")
    const randomIndex = Math.floor(Math.random() * wordsArray.length)
    let word = wordsArray[randomIndex]
    setRandomWord(word)
  }
  //if there is no assigned word to the variable run the function again
  if (!randomWord) {
    fetchRandomWord()
  }

  //enable user restart the game
  function playAgain() {
    //Empty Arrays and reset state variables
    setButtonClass("keys")
    changeButtonsClass()
    setCorrectLetters([])
    setWrongLetters([])
    setGuessesLeft(11)

    setHangImage(state1)
    setDisabled(false)

    let randomIndex = Math.floor(Math.random() * wordsArray.length)
    let word = wordsArray[randomIndex]
    setRandomWord(word)
  }

  //Enable user to exit the game and disable the keys
  const exitGame = () => {
    const btnArry = document.getElementsByName("alphabetKeys")
    Array.from(btnArry).forEach((bttn) => {
      bttn.className = "keys"
    })
    changeButtonsClass()
    setCorrectLetters([])
    setWrongLetters([])
    setGuessesLeft(11)
    setHangImage(state1)
    setDisabled(true)

    let randomIndex = Math.floor(Math.random() * wordsArray.length)
    let word = wordsArray[randomIndex]
    setRandomWord(word)
  }
  return (
    <div className="App">
      {/* Header component that displays the help and restart buttons s */}
      <Header playAgain={playAgain} />
      {/* Main component that displays the hangman images, guesses left and the space for the word to be guessed */}
      <Main
        randomWord={randomWord}
        guessesLeft={guessesLeft}
        hangImage={hangImage}
        correctLetters={correctLetters}
      />
      {/* Keyboard component */}
      <Keyboard
        randomWord={randomWord}
        correctLetters={correctLetters}
        setCorrectLetters={setCorrectLetters}
        wrongLetters={wrongLetters}
        setWrongLetters={setWrongLetters}
        setHangImage={setHangImage}
        guessesLeft={guessesLeft}
        setGuessesLeft={setGuessesLeft}
        buttonClass={buttonClass}
        disabled={disabled}
      />
      {/* Popup component to notify the user if they lost or won the game */}
      <Popup
        correctLetters={correctLetters}
        wrongLetters={wrongLetters}
        selectedWord={randomWord}
        playAgain={playAgain}
        exitGame={exitGame}
      />
    </div>
  )
}

export default App
