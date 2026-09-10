import { useState } from 'react'

function App() {
  const [guess, setGuess] = useState('')
  const [secretNumber, setSecretNumber] = useState(
    Math.floor(Math.random() * 100) + 1
  )
  const [message, setMessage] = useState('')
  const [attempts, setAttempts] = useState(0)
  const [history, setHistory] = useState([])
  const [gameWon, setGameWon] = useState(false)

  function checkGuess() {
    const number = Number(guess)

    if (!Number.isInteger(number) || number < 1 || number > 100) {
      setMessage('Introdu un număr între 1 și 100.')
      return
    }

    setAttempts(attempts + 1)
    setHistory([...history, number])

    if (number === secretNumber) {
      setMessage(`Bravo! Ai ghicit numărul ${secretNumber}! 🎉`)
      setGameWon(true)
    } else if (number < secretNumber) {
      setMessage('Prea mic! ⬆️')
    } else {
      setMessage('Prea mare! ⬇️')
    }

    setGuess('')
  }

  function newGame() {
    setSecretNumber(Math.floor(Math.random() * 100) + 1)
    setGuess('')
    setMessage('')
    setAttempts(0)
    setHistory([])
    setGameWon(false)
  }

  return (
    <div className="app">
      <h1>Number Guessing Game</h1>

      <p>Ghicește numărul între 1 și 100.</p>

      <div className="input-area">
        <input
          type="number"
          min="1"
          max="100"
          value={guess}
          onChange={(e) => setGuess(e.target.value)}
          placeholder="Introdu numărul"
          disabled={gameWon}
        />

        <button onClick={checkGuess} disabled={gameWon}>
          Ghicește
        </button>
      </div>

      {message && (
        <div className="result">
          <h2>{message}</h2>

          <p>
            Încercări:{' '}
            <strong>{attempts}</strong>
          </p>

          {history.length > 0 && (
            <>
              <p>Numere încercate:</p>

              <p className="history">
                {history.join(' · ')}
              </p>
            </>
          )}

          {gameWon && (
            <button onClick={newGame}>
              Joc nou
            </button>
          )}
        </div>
      )}
    </div>
  )
}

export default App


