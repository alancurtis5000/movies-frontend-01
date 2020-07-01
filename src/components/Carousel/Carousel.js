import React from 'react';
import ButtonArrow from '../ButtonArrow/ButtonArrow';

const Carousel = (props) => {

  const handleArrowClick = (direction) => {
    console.log("arrow Clicked", direction);
  }

  let content = props.content.map((item,i)=>{
    return (
      <div key={i} className="content-container">
        <img src={item} alt=""/>
      </div>
    )
  })

  return(
    <div className="Carousel">
      <ButtonArrow direction="left" handleClick={handleArrowClick}/>
      <div className="content">
        {content}
      </div>
      <ButtonArrow direction="right" handleClick={handleArrowClick}/>
    </div>
  )
}

Carousel.defaultProps = {
  content:[]
}

export default Carousel;