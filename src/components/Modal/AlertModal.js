import React from 'react'

const AlertModal = props => {
  return (
    <div className='modal fade' id={`alert_box`} style ={{zIndex: 1058}}>
      <div className='modal-dialog modal-sm'>
        <div className='modal-content'>
          <div className='modal-header'>
            <h5 className='modal-title heading'>{props.message}</h5>
            <button type='button' className='close' data-dismiss='modal'>
              <i className='fas fa-times' />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AlertModal
