import React from 'react'
import introsong from '../assets/introsong.mp3'
function Welcome() {
  return (
    <div className='text-center w-100 justify-content-center align-items-center fw-bolder pt-5'>
   <audio type="audio/mpeg" loop autoplay src={introsong}></audio>
    </div>
  )
}

export default Welcome
