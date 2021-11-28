import React from 'react'

const SubHeader = (props) =>(
  <div id={props.title === 'Our Story' ? 'ourstory' : `${props.title }`} className="subHeader">
    <h2>{props.title}</h2>
  </div> 
)

export default SubHeader
