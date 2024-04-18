import React from 'react'
import drums from '../assets/drums.jpg'
import t from '../assets/t.webp'
import piano from '../assets/piano.jpg'
import violin from '../assets/violin.webp'
import video1 from '../assets/video1.mp4'
import introsong from '../assets/introsong.mp3'
function About() {
  return (
    <div className='about container-fluid mt-2 align-items-center justify-content-center'>
      <h1 className='text-center text-dark pt-3'>About Us</h1>
      <div className='row'>
        <div className="col-md-6">
            <p className='fs-4' style={{textAlign:'justify'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. In voluptates inventore consequatur dolorem fugit. Neque et repudiandae temporibus odio reiciendis deserunt fuga, nihil, exercitationem provident, quos quisquam tempora magnam! Accusamus?</p>
            <div className='d-flex align-items-center justify-content-center mt-5'>
                <h2 className='text-center me-3'>Play Music</h2>
                <audio type="audio/mpeg" controls loop autoPlay  src={introsong}></audio>
            </div>
        </div>
        <div className="col"></div>
        <div className="col-md-5">
            <video autoPlay loop muted   src={video1} style={{width:'100%'}}></video>
        </div>
      </div>
    </div>
  )
}

export default About
