import React from 'react';
import ButtonArrow from '../ButtonArrow/ButtonArrow';

const Carousel = () => {

  const handleArrowClick = (direction) => {
    console.log("arrow Clicked", direction);
  }

  return(
    <div className="Carousel">
      <ButtonArrow direction="left" handleClick={handleArrowClick}/>
      <div className="content">
        Carousel
      </div>
      <ButtonArrow direction="right" handleClick={handleArrowClick}/>
    </div>
  )
}

export default Carousel;