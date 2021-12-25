import React from 'react'
import {getRandomEntry} from '../util'

const Jumbotron = ({pics}) => {
  const {url, description} = getRandomEntry(pics)
  
  return (
    <div className='jumbotron'>
      <img src={url} alt={description} />
      <h1> MaryAlexa & Silvino </h1>
    </div>
  )
  
}

export default Jumbotron
