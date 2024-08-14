import { useState, useEffect } from "react"
import { nanoid } from "nanoid"
import Die from "./components/Die"
import Confettis from "./components/Confettis"
import Score from "./components/Score"

export default function App() {

  const [dice, setDice] = useState(allNewDice())
  const [tenzies, setTenzies] = useState(false)
  const [showScore, setShowScore] = useState(true)
  const [rollCount, setRollCount]  = useState(0)
  const [time, setTime] = useState(0)
  const [bestTime, setBestTime] = useState(localStorage.getItem(""))



  useEffect(() => {
    const areAllHeld = dice.every(die => die.isHeld)
    const areAllEqual = dice.every(die => die.value === dice[0].value)
    if (areAllHeld && areAllEqual) {
      setTenzies(true)
    }
  }, [dice])

  useEffect(() => {
    if (tenzies) {
      setTime(prevTime => ((Date.now() - prevTime) / 1000).toFixed(2))
    }
  }, [tenzies])

  function generateNewDie() {
    const randomNumber = Math.floor(Math.random() * 6) + 1;
    return {
      value: randomNumber,
      isHeld: false,
      id: nanoid(),
    };
  }

  function allNewDice() {
    let diceNumbers = []
    for (let i = 0; i < 10; i++) {
      diceNumbers.push(generateNewDie())
    }
    return diceNumbers
  }

  function rollDice() {
    setDice(prevDice =>
      prevDice.map(die =>
        die.isHeld ? die
          :
        generateNewDie()
      )
    )
    setRollCount(prevRollCount => prevRollCount + 1)
  }

  function holdDice(id) {
    setDice((prevDice) =>
      prevDice.map((die) =>
        die.id === id
          ? {
              ...die,
              isHeld: !die.isHeld,
            }
          : die
      )
    );
  }

  function newGame() {
      setTenzies(false)
      setDice(allNewDice())
      setShowScore(true)
      setRollCount(0)
      setTime(Date.now())
  }

  function dismissScore() {
    setShowScore(false)
    console.log("Dismissed")
  }

  const diceElements = dice.map((die) => {

    return <Die key={die.id} value={die.value} isHeld={die.isHeld} holdDice={holdDice} id={die.id}/>;
  });

  return (
    <main>
      <div className="main--text">
        <h1 className="title">Tenzies</h1>
        <p className="instructions">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
      </div>
      <div className="dice-container">
        {diceElements}
      </div>
      <button type="button" onClick={tenzies ? newGame : rollDice }>{tenzies ? "New Game" : "Roll"}</button>
      {tenzies && <Confettis />}
      {tenzies && showScore && <Score dismissScore={dismissScore} rolls={rollCount} time={time} />}
    </main>
  )
}