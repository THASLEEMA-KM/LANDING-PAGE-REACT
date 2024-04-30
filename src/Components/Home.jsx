import React from 'react'
// import picsture2 from '../assets/picsture2.webp'
// import bali from '../assets/bali.jpg'
// import introsong from '../assets/introsong.mp3'
function Home() {
  return (
    <div className='home container-fluid' id='landing' style={{minHeight:'100vh',width:'100%'}} >
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
   
  )
}

export default Home
