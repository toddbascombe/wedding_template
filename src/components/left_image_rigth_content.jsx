import React from 'react'

const RightContent = (props)=>{
  return(
    <div className="content">
      <div className="photo-right">
       <img src={props.url} alt={props.description} />
      </div>

      <div className="content-right">
        {props.children}
      </div>
    </div>
  )
}

export default RightContent

