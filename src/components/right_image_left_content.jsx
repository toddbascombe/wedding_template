import React from 'react'
import {getRandomEntry} from '../util'

const LeftContent = ({pics, children}) => {
  const {url, description} = getRandomEntry(pics)
  
  return(
    <div className="content">
      <div className="content-para">
        {children}
      </div>
      <div className="photo">
       <img src={url} alt={description} />
      </div>
    </div>
  )
}

export default LeftContent
