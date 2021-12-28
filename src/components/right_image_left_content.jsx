import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { getRandomEntry } from '../util'

const LeftContent = ({ pics, children }) => {
  const randomPic = getRandomEntry(pics)
  const [pic] = useState(randomPic)

  return (
    <div className="content">
      <div className="content-para">{children}</div>
      <div className="photo">
        <img src={pic.url} alt={pic.description} />
      </div>
    </div>
  )
}

LeftContent.propTypes = {
  pics: PropTypes.array,
  children: PropTypes.children
}

export default LeftContent
