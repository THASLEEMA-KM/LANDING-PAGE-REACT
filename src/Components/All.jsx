import React from 'react'
import logo from '../assets/logo.png'
import video1 from '../assets/video1.mp4'
import introsong from '../assets/introsong.mp3'
import drums from '../assets/drums.jpg'
import t from '../assets/t.webp'
import piano from '../assets/piano.jpg'
import violin from '../assets/violin.webp'
function All() {
  return (
    <div>
        {/* header */}
        <header className="header">
<a href='#'><img src={logo} alt="" style={{width:'80px',height:'80px'}} /></a>
        
        <input type="checkbox"  id="check"/>
        <label for="check" class="icons">
          
            <i class='bx bx-menu' id="menu-icon"></i>
           
            <i class="bx bx-x" id="close-icon"></i>
        </label>

        <nav class="navbar">
            <a href="#landing">HOME</a>
            <a href="#abouts">ABOUT</a>
            <a href="#gallery">GALLERY</a>
            <a href="#contact">CONTACT</a>        
            <a href="">SIGN IN</a> 
            <a href="">LOGIN</a> 
        </nav>
    </header>

    {/* home */}
    <div className='home container-fluid mt-5' id='landing' style={{minHeight:'100vh',width:'100%'}} >
      {/* <img src={picsture2} alt="" /> */}
      <div className='text-center w-100 justify-content-center align-items-center fw-bolder'>
      <h1 className='pt-4 text-light animate__animated animate__flipInY'>Music Store</h1>
      <p className='text-light'>Where you find your music products here!!!</p>
    </div>
      <div className="row d-flex">
     
        
        <div className="col-md-2">
          {/* <div className='container'>
            <img style={{width:'100%',height:'350px'}} src={bali} alt="" />
          </div> */}
        </div>

      <div className="col-md-8">
         <div className='para' style={{textAlign:'justify'}}> 
         <p className='text-light'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae veritatis voluptatibus ipsam sint, aliquid aspernatur quod perspiciatis, sit, error in voluptates quis similique illum consectetur molestias. Minima praesentium dicta reprehenderit!</p>
        <div className='container text-center pt-5'>
           <button type='button' className='btn ms-3 text-light fw-bold border border-2 shadow rounded-3'>Get Started</button>
           <button type='button' className='btn ms-3 text-light border fw-bolder border-5  shadow rounded-5'>See More</button>
            
        </div>
        {/* <audio  loop controls autoplay>
          <source src={introsong} type="audio/mpeg"  />
        </audio> */}
        
         </div>
        </div>
        <div className="col-md-2">
          {/* <div className='container'>
            <img style={{width:'100%',height:'350px'}} src={bali} alt="" />
          </div> */}
        </div>
      </div>

    </div>
{/* about */}
<div id='abouts' className='about container-fluid mt-2 align-items-center justify-content-center'>
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

    {/* gallery cards */}
    <div id='gallery' className='products container-fluid  mt-2 align-items-center justify-content-center'>
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
    {/* contacts footer */}
    <div>
        <footer>
            <div>
            <div id='contact' className="section-head mt-3">
                <h2 className="text-center">CONTACTS</h2>
               
            </div>
            <div className="icon-collection">
                <div className="icon">
                    <a href=""><i className="fa-brands fa-linkedin-in brand"></i></a>
                </div>
                <div className="icon">
                    <a href=""><i className="fa-brands fa-github brand"></i></a>
                </div>
                <div className="icon">
                    <a href=""><i className="fa-brands fa-twitter brand"></i></a>
                </div>
                <div className="icon">
                    <a href=""><i className="fa-brands fa-facebook-f brand"></i></a>
                </div>
                <div className="icon">
                    <a href=""><i className="fa-brands fa-instagram brand"></i></a>
                </div>
                <div className="icon">
                    <a href=""><i className="fa-solid fa-envelope brand"></i></a>
                </div>
            </div>
            </div>
            <div className='copyright text-center text-light bg-dark'>
            © 2024 Copyright:
                <a className=" fw-bold" href="#">thasleemakm5@gmail.com</a>
            </div>
        </footer>
    </div>
    </div>
  )
}

export default All