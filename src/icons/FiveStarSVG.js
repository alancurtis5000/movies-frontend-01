
import React from "react";
const FiveStarSVG =(props)=>{
    let { className, height=32, width=32, fill="black", stroke = "black", strokeWidth = "0", onClick, size, amount=1 , id} = props;
    let starFillColor= '#ffc800';
    let starBGColor='#c9c9c9';

  if(size){
    height = size;
    width = size;
  }
  
  let stars = {
    s1 : "0",
    s2 : "0",
    s3 : "0",
    s4 : "0",
    s5 : "0",
  }

  let howManyStars = amount * 5;
  let quotient = Math.floor(howManyStars);
  let decimal = howManyStars - Math.floor(howManyStars) ;
  
  for ( let x = 0; x <= quotient; x++ ){
    stars[`s${x}`] = x;
  }
  if (decimal > 0 ){
    stars[`s${quotient + 1}`] = decimal;
  }

  return (

    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 30" id={id} className={className} fill={fill} stroke={stroke} strokeWidth={strokeWidth} onClick={onClick} width={width} heigh={height} >
      <g>
      <linearGradient id={`${id}a`} gradientUnits="userSpaceOnUse" x1="2.19" y1="14.56" x2="23.37" y2="14.56">
        <stop offset={stars.s1} stopColor={starFillColor}/>
        <stop offset={stars.s1} stopColor={starBGColor}/>
      </linearGradient>
      <path fill={`url(#${id}a`} d="M12.66 21.81L5.5 25.58l1.37-7.98-5.8-5.64 8.01-1.17 3.58-7.25 3.58 7.25 8.01 1.17-5.8 5.64 1.37 7.98z"/>
      <path d="M12.66 4.67l3.02 6.11.23.47.52.08 6.74.98-4.88 4.76-.38.37.09.52 1.15 6.72-6.03-3.17-.47-.24-.47.24-6.03 3.17 1.15-6.72.09-.52-.38-.37-4.88-4.76 6.74-.98.52-.08.23-.47 3.04-6.11m0-2.26l-3.91 7.93L0 11.61l6.33 6.17-1.49 8.71 7.82-4.11 7.82 4.11-1.49-8.71 6.33-6.17-8.75-1.27-3.91-7.93z"/>
      </g>
      <g>
      <linearGradient id={`${id}b`} gradientUnits="userSpaceOnUse" x1="27.88" y1="14.56" x2="49.06" y2="14.56">
        <stop offset={stars.s2} stopColor={starFillColor}/>
        <stop offset={stars.s2} stopColor={starBGColor}/>
      </linearGradient>
      <path fill={`url(#${id}b)`} d="M38.35 21.81l-7.16 3.77 1.37-7.98-5.8-5.64 8.01-1.17 3.58-7.25 3.58 7.25 8.01 1.17-5.8 5.64 1.37 7.98z"/>
      <path d="M38.35 4.67l3.02 6.11.23.47.52.08 6.74.98-4.88 4.76-.38.37.09.52 1.15 6.72-6.03-3.17-.47-.24-.47.24-6.03 3.17 1.15-6.72.09-.52-.38-.37-4.88-4.76 6.74-.98.52-.08.23-.47 3.04-6.11m0-2.26l-3.91 7.93-8.75 1.27 6.33 6.17-1.49 8.71 7.82-4.11 7.82 4.11-1.49-8.71 6.33-6.17-8.75-1.27-3.91-7.93z"/>
      </g>
      <g>
        <linearGradient id={`${id}c`} gradientUnits="userSpaceOnUse" x1="53.57" y1="14.56" x2="74.75" y2="14.56">
          <stop offset={stars.s3} stopColor={starFillColor}/>
          <stop offset={stars.s3} stopColor={starBGColor}/>
        </linearGradient>
        <path fill={`url(#${id}c)`} d="M64.04 21.81l-7.16 3.77 1.37-7.98-5.8-5.64 8.01-1.17 3.58-7.25 3.58 7.25 8.01 1.17-5.8 5.64 1.37 7.98z"/>
        <path d="M64.04 4.67l3.02 6.11.23.47.52.08 6.74.98-4.88 4.76-.38.37.09.52 1.15 6.72-6.03-3.17-.47-.24-.47.24-6.03 3.17 1.15-6.72.09-.52-.38-.37-4.88-4.76 6.74-.98.52-.08.23-.47 3.04-6.11m0-2.26l-3.91 7.93-8.75 1.27 6.33 6.17-1.49 8.71 7.82-4.11 7.82 4.11-1.49-8.71 6.33-6.17-8.75-1.27-3.91-7.93z"/>
      </g>
      <g>
        <linearGradient id={`${id}d`} gradientUnits="userSpaceOnUse" x1="79.26" y1="14.56" x2="100.44" y2="14.56">
          <stop offset={stars.s4} stopColor={starFillColor}/>
          <stop offset={stars.s4} stopColor={starBGColor}/>
        </linearGradient>
        <path fill={`url(#${id}d)`} d="M89.73 21.81l-7.16 3.77 1.36-7.98-5.79-5.64 8.01-1.17 3.58-7.25 3.58 7.25 8 1.17-5.79 5.64 1.37 7.98z"/>
        <path d="M89.73 4.67l3.02 6.11.23.47.52.08 6.74.98-4.88 4.76-.38.37.09.52 1.15 6.72-6.03-3.17-.47-.24-.47.24-6.03 3.17 1.15-6.72.09-.52-.38-.37-4.88-4.76 6.74-.98.52-.08.23-.47 3.04-6.11m0-2.26l-3.91 7.93-8.75 1.27 6.33 6.17-1.49 8.71 7.82-4.11 7.82 4.11-1.49-8.71 6.33-6.17-8.75-1.27-3.91-7.93z"/>
      </g>
      <g>
        <linearGradient id={`${id}e`} gradientUnits="userSpaceOnUse" x1="104.95" y1="14.56" x2="126.13" y2="14.56">
          <stop offset={stars.s5} stopColor={starFillColor}/>
          <stop offset={stars.s5} stopColor={starBGColor}/>
        </linearGradient>
        <path fill={`url(#${id}e)`} d="M109.62 17.6l-5.79-5.64 8.01-1.17 3.58-7.25 3.58 7.25 8 1.17-5.79 5.64 1.37 7.98-7.16-3.77-7.16 3.77z"/>
        <path d="M115.42 4.67l3.02 6.11.23.47.52.08 6.74.98-4.88 4.76-.38.37.09.52 1.15 6.72-6.03-3.17-.47-.24-.47.24-6.03 3.17 1.15-6.72.09-.52-.38-.37-4.88-4.76 6.74-.98.52-.08.23-.47 3.04-6.11m0-2.26l-3.91 7.93-8.75 1.27 6.33 6.17-1.49 8.71 7.82-4.11 7.82 4.11-1.49-8.71 6.33-6.17-8.75-1.27-3.91-7.93z"/>
      </g>
   </svg>
  );
};

export default FiveStarSVG;
