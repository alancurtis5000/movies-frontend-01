import React from 'react';

const PlaySVG = (props) => {
  let {className, size, height, width, fill , stroke, strokeWidth, onClick } = props;
  if(size){
    height = size;
    width = size;
  }
  return (
    <svg id="burger" viewBox="0 0 128 128" className={className} height={height} width={width} fill={fill} stroke={stroke} strokeWidth={strokeWidth} onClick={onClick}>
      <path fill="#ccc" stroke="gray" strokeMiterlimit="10" d="M34 30l69 34.42L34 98z"/>
      <path d="M119 64A55 55 0 119 64a55 55 0 11110 0zM64 13.5a50.5 50.5 0 100 101 50.5 50.5 0 000-101z" fill="#ccc" stroke="gray" strokeMiterlimit="10"/>
    </svg>
  )
};

export default PlaySVG;
