import React from 'react'

function Foooter() {
  return (
    <div>
        <footer>
            <div>
            <div className="section-head mt-3">
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
  )
}

export default Foooter
