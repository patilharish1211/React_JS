import React from 'react'

const Post = ({title, body}) => {
  return (
    <div className='text-center p-3 col-12  d-flex align-items-center justify-content-center flex-column' >
      <div className='col-7 border text-center p-3 border-info text-light border-4'>
      <h3>{title}</h3>
      <p className='col-12'>{body}</p>
      </div>
    </div>
  )
}

export default Post