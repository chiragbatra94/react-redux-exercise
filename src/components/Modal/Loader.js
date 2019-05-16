import React from 'react'

const Loader = props => {
  if (props.isHidden) {
    return null
  }
  return (
    <div className='loader-wrap'>
      <div />
    </div>
  )
}

export default Loader
