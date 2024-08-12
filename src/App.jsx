import { useState } from "react"
import Die from "./components/Die"

export default function App() {

  const [dice, setDice] = useState(allNewDice())

  function allNewDice() {
    let diceNumbers = []

    for (let i = 0; i < 10; i++) {
      const randomNumber = Math.floor(Math.random() * 6) + 1
      diceNumbers.push({
        value: randomNumber,
        isHeld: false
      })
    }
    return diceNumbers
  }

  function rollDice() {
    setDice(allNewDice())
  }

  const diceElements = dice.map((die) => {
    return <Die value={die.value} />;
  });

  return (
    <main>
      <div className="dice-container">
        {diceElements}
      </div>
      <button type="button" onClick={rollDice}>Roll</button>
    </main>
  )
}