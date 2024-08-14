/* eslint-disable react/prop-types */

// import { nanoid } from "nanoid";

export default function Die(props) {
  const dieStyle = {
    backgroundColor: props.isHeld ? '#59E391' : '',
  };
  /* Add dots */
  // let dots = []
  // for (let i = 0; i < props.value; i++){
  //   dots.push(<span key={nanoid()}>.</span>)
  // }
  return (
    <div className="die-el" style={dieStyle} onClick={()=>props.holdDice(props.id)}>
      {props.value}
      {/* {dots} */}
    </div>
  )
}