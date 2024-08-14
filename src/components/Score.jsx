/* eslint-disable react/prop-types */
import removeIcon from "../assets/remove-icon.png"

export default function Score(props) {
  
  return (
    <div className="score">
      {/* REMPLACER AVEC UN VRAI ICONE */}
      <button type="button" className="dismiss-score" onClick={() => props.dismissScore()}>
        <img src={removeIcon} alt="Dismiss Score"  className="remove-icon"/>
      </button>
      <div className="score--container">
        <h2>
          <u>Score:</u>
        </h2>
        <p>{`Rolls: ${props.rolls}`}</p>
        <p>{`Time: ${props.time}s`}</p>
        <p>{`Best time: ${props.bestTime}s`}</p>
      </div>
    </div>
  );
}