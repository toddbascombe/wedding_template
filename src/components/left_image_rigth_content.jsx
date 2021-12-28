import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { getRandomEntry } from '../util'

const RightContent = ({ pics, children }) => {
  const randomPic = getRandomEntry(pics)
  const [pic] = useState(randomPic)

  return (
    <div className="content">
      <div className="photo-right">
        <img src={pic.url} alt={pic.description} />
      </div>

      <div className="content-right">{children}</div>
    </div>
  )
}

RightContent.propTypes = {
  pics: PropTypes.array.isRequired,
  children: PropTypes.children
}

export default RightContent
