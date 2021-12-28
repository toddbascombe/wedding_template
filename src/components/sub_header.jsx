import React from 'react'
import PropTypes from 'prop-types'

const SubHeader = ({ title }) => (
  <div
    id={title === 'Our Story' ? 'ourstory' : `${title}`}
    className="subHeader"
  >
    <h2>{title}</h2>
  </div>
)

SubHeader.propTypes = {
  title: PropTypes.string
}

export default SubHeader
