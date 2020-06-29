import React from 'react';
const Section = (props) => {
  return(
    <div className="Section">
    <div className="header">
      <div className="separator"></div>
      <div className="title">{props.title}</div>
      <div className="separator"></div>
    </div>
      {props.children}
    </div>
  )
}

Section.defaultProps = {
  title:"hello",
}
export default Section;