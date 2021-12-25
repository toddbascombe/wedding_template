import React from 'react'
import {getRandomEntry} from '../util'

const RightContent = ({pics, children}) => {
  const {url, description} = getRandomEntry(pics)
  
  return(
    <div className="content">
      <div className="photo-right">
       <img src={url} alt={description} />
      </div>

      <div className="content-right">
        {children}
      </div>
    </div>
  )
}

export default RightContent

