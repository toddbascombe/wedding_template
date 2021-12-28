import React from 'react'
import PropTypes from 'prop-types'
import { getRandomEntry } from '../util'

const LeftContent = ({ pics, children }) => {
  const { url, description } = getRandomEntry(pics)

  return (
    <div className="content">
      <div className="content-para">{children}</div>
      <div className="photo">
        <img src={url} alt={description} />
      </div>
    </div>
  )
}

LeftContent.propTypes = {
  pics: PropTypes.array,
  children: PropTypes.children
}

export default LeftContent
