import React, { useState } from 'react'
import PropTypes from 'prop-types'

import { getRandomEntry } from '../util'

const Jumbotron = ({ pics }) => {
  const randomPic = getRandomEntry(pics)
  const [pic] = useState(randomPic)

  return (
    <div className="jumbotron">
      <img src={pic.url} alt={pic.description} />
      <h1> MaryAlexa & Silvino </h1>
    </div>
  )
}

Jumbotron.propTypes = {
  pics: PropTypes.object.isRequired
}

export default Jumbotron
