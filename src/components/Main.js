import Keyboard from "./Keyboard"
import { useState } from "react"

function Main() {
  //render the main components below
  const [showDiv, setShowDiv] = useState(false)

  function handleButtonClick() {
    setShowDiv(!showDiv)
  }

  return (
    <div>
      <div className="help-container">
        <button onClick={handleButtonClick}>Get Help</button>
        {showDiv && (
          <div className="help-section">
            <h3>How to Play</h3>
            <p>
              Guess the hidden word by selecting a key on the virtual keyboard
            </p>
            <p>Selecting a wrong letter will highlight the word red</p>
            <p>Selecting a correct letter will highlight the word green</p>
            <p>The letter will be displayed above the keyboard</p>
            <p>Each wrong guess reduces your game life by 1</p>
            <p>
              You will be prompted to try again with a different word when you
              run out of game lives
            </p>
            <button onClick={handleButtonClick}>Exit</button>
          </div>
        )}
      </div>
      <div>
        <Keyboard />
      </div>
    </div>
  )
}

export default Main
