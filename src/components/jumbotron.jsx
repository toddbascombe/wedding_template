import React from 'react'
import vid from '../Assets/production ID_3704007.mp4'

const Jumbotron =()=>{
  return (
    <div className='jumbotron'>
      <video  autoPlay loop muted>
        <source src={vid} type='video/mp4' />
      </video>
      <h1> Todd & Bianca </h1>
    </div>
  )
  
}

export default Jumbotron
