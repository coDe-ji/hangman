/**
 * This is the header component. Containing the Game title, Restart button and the help section.
 */

//import useful modules.
import "../style/index.css"
import { useState } from "react"

// Header Component takes in a playagain prop to be passed where the component is called. The play again prop is used to restart the game.
function Header({ playAgain }) {
  const [showDiv, setShowDiv] = useState(false)
  // function to toggle the help information display
  function handleButtonClick() {
    setShowDiv(!showDiv)
  }
  return (
    <div className="head">
      {/* Restart button */}
      <div className="restart-container ">
        <div className="restart-button">
          <button className="head-button" onClick={playAgain}>
            Restart
          </button>
        </div>
      </div>
      {/* Game header */}
      <div className="game-name">
        <h1>Hangman</h1>
        <p>Guess the hidden Word</p>
      </div>

      {/* Help container */}
      <div className="help-container ">
        <div className="help-button">
          <button className="head-button" onClick={handleButtonClick}>
            Get Help
          </button>
        </div>
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
            <button onClick={handleButtonClick}>close</button>
          </div>
        )}
      </div>
    </div>
  )
}

export default Header
