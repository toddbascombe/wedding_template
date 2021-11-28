import React from 'react'

const LeftContent = (props)=>{
  return(
    <div className="content">
      <div className="content-para">
        {props.children}
      </div>
      <div className="photo">
       <img src={props.url} alt={props.description} />
      </div>
    </div>
  )
}

export default LeftContent