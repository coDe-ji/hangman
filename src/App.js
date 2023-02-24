import "./App.css"
import Header from "./components/Header"
import Keyboard from "./components/Keyboard"
import Main from "./components/Main"
import Popup from "./components/Popup"
import React, { useState } from "react"
import state1 from "./hangmandrawings/state1.GIF"
import dictionary from "./words/dictionary.txt"
import { changeButtonsClass } from "../src/components/Popup"

let wordsArray = []

function App() {
  const [correctLetters, setCorrectLetters] = useState([])
  const [wrongLetters, setWrongLetters] = useState([])
  const [guessesLeft, setGuessesLeft] = useState(11)
  const [randomWord, setRandomWord] = useState("")
  const [hangImage, setHangImage] = useState(state1)
  const [buttonClass, setButtonClass] = useState("keys")

  //generate a random word and set the variable, check if there is a word available to avoid generating multiple words.
  //useEffect(() => {
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
  //}, [randomWord])

  //enable user restart the game
  function playAgain() {
    // // Empty Arrays
    changeButtonsClass()
    setCorrectLetters([])
    setWrongLetters([])
    setGuessesLeft(11)
    setHangImage(state1)

    let randomIndex = Math.floor(Math.random() * wordsArray.length)
    let word = wordsArray[randomIndex]
    setRandomWord(word)
  }
  return (
    <div className="App">
      <Header playAgain={playAgain} />
      <Main
        randomWord={randomWord}
        guessesLeft={guessesLeft}
        hangImage={hangImage}
        correctLetters={correctLetters}
      />
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
      />
      <Popup
        correctLetters={correctLetters}
        wrongLetters={wrongLetters}
        selectedWord={randomWord}
        playAgain={playAgain}
      />
    </div>
  )
}

export default App
