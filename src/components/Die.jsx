/* eslint-disable react/prop-types */

export default function Die(props) {
  const dieStyle = {
    backgroundColor: props.isHeld ? '#59E391' : '',
  };
  return (
    <div className="die-el" style={dieStyle} onClick={()=>props.holdDice(props.id)}>
      {props.value}
    </div>
  )
}