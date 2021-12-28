import React from 'react'
import PropTypes from 'prop-types'

const FadeInSection = ({ children }) => {
  const [isVisible, setVisible] = React.useState(true)
  const domRef = React.useRef()

  React.useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        setVisible(entry.isIntersecting)
      })
    })

    observer.observe(domRef.current)

    // eslint-disable-next-line react-hooks/exhaustive-deps
    return () => observer.unobserve(domRef.current)
  }, [])

  return (
    <div
      className={`fade-in-section ${isVisible ? 'is-visible' : ''}`}
      ref={domRef}
    >
      {children}
    </div>
  )
}

FadeInSection.propTypes = {
  children: PropTypes.children
}

export default FadeInSection
