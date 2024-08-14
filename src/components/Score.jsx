/* eslint-disable react/prop-types */

export default function Score(props) {
  
  return (
    <div className="score">
      {/* REMPLACER AVEC UN VRAI ICONE */}
      <button type="button" className="dismiss-score" onClick={()=>props.dismissScore()}>❌</button>
      <div className="score--container">
        <h3>
          <u>Score:</u>
        </h3>
        <p>{`Rolls: ${props.rolls}`}</p>
        <p>{`Time: ${props.time}`}</p>
        <p>{`Best time: 1min`}</p>
      </div>
    </div>
  );
}