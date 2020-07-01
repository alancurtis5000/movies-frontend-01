import React from 'react';
import ArrowRightSVG from '../../icons/ArrowRightSVG';

const ButtonArrow = (props) => {

  let rotation = 0
  if (props.direction === "left"){
    rotation = 180
  }

  const handleClick = () =>{
    props.handleClick(props.direction)
  }

  return(
    <div className="ButtonArrow" onClick={handleClick} >
      <ArrowRightSVG rotate={rotation}/>
    </div>
  )
}

export default ButtonArrow;