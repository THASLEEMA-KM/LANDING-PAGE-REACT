import React from 'react'
import drums from '../assets/drums.jpg'
import t from '../assets/t.webp'
import piano from '../assets/piano.jpg'
import violin from '../assets/violin.webp'
function Card() {
  return (
    <div className='products container-fluid  mt-2 align-items-center justify-content-center'>
      <h1 className='text-center text-dark pt-3'>See our Products</h1>
      {/* <div className='card cards'>
              <img src={violin} style={{width:'100%', height:'300px'}} alt="" />
                <p className='text-center fs-3 fw-bolder'>VIOLIN</p>
            </div>
            <div className='card cards'>
              <img src={violin} style={{width:'100%', height:'300px'}} alt="" />
                <p className='text-center fs-3 fw-bolder'>VIOLIN</p>
            </div>
            <div className='card cards'>
              <img src={violin} style={{width:'100%', height:'300px'}} alt="" />
                <p className='text-center fs-3 fw-bolder'>VIOLIN</p>
            </div>
            <div className='card cards'>
              <img src={violin} style={{width:'100%', height:'300px'}} alt="" />
                <p className='text-center fs-3 fw-bolder'>VIOLIN</p>
            </div> */}
      <div className='row pt-5'>
        <div className='col-md-3 border-1  rounded'>
            <div className='card cards'>
              <img src={violin} style={{width:'100%', height:'300px'}} alt="" />
                <p className='text-center fs-3 fw-bolder'>VIOLIN</p>
            </div>
        </div>
        <div className='col-md-3  border-1  rounded '>
            <div className='card cards'>
              <img src={t} style={{width:'100%', height:'300px'}} alt="" />
                <p className='text-center fs-3 fw-bolder'>TRUMPET</p>
            </div>
        </div>
        <div className='col-md-3  border-1  rounded '>
            <div className='card cards'>
              <img src={piano} style={{width:'100%', height:'300px'}} alt="" />
              <p className='text-center fs-3 fw-bolder'>PIANO</p>
            </div>
        </div>
        <div className='col-md-3  border-1  rounded '>
            <div className='card cards'>
              <img src={drums} style={{width:'100%', height:'300px'}} alt="" />
              <p className='text-center fs-3 fw-bolder'>DRUMS</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Card
