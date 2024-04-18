import React from 'react'
import logo from '../assets/logo.png'

function Header() {
  return (
    <div>

<header>
<a href='#'><img src={logo} alt="" style={{width:'80px',height:'80px'}} /></a>
<input type='checkbox'  id="check"/>
        <label for="check" className='icons'>
            {/* <!-- menu icon --> */}
            <i className='bx bx-menu' id="menu-icon"></i>
            {/* <!-- close icon --> */}
            <i className="bx bx-x" id="close-icon"></i>
        </label>
       {/* <!-- menu bar --> */}
        <nav className='navbar navbar1'>
       

            <div className='float-start'>
              
                <ul>
                    <li className="list-items"><a className="links" href="#home">HOME</a></li>
                    <li className="list-items"><a className="links" href="#about">ABOUT</a></li>
                    <li className="list-items"><a className="links" href="#gallery">GALLERY</a></li>
                    <li className="list-items"><a className="links" href="#contact">CONTACT</a></li>

                    <div className='float-end'>
                        <li className="list-items"><a className="links" href="#signin">SIGN IN</a></li>
                        <li className="list-items"><a className="links" href="#login">LOGIN</a></li>
                    </div>
                </ul>
            </div>
          
            </nav>
</header>
    </div>
  )
}

export default Header
