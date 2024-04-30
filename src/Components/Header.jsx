import React from 'react'
import logo from '../assets/logo.png'
// import About from './About'
// import Card from './Card'
// import Foooter from './Foooter'
// import Home from './Home'

function Header() {
  return (
    <div>

{/* <header>
<a href='#'><img src={logo} alt="" style={{width:'80px',height:'80px'}} /></a>
<input type='checkbox'  id="check"/>
        <label for="check" className='icons'>
            
            <i className='bx bx-menu' id="menu-icon"></i>
           
            <i className="bx bx-x" id="close-icon"></i>
        </label>
       
        <nav className='navbar navbar navbar-expand-lg navbar1'>
       

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
</header> */}
<header className="header">
<a href='#'><img src={logo} alt="" style={{width:'80px',height:'80px'}} /></a>
        
        <input type="checkbox"  id="check"/>
        <label for="check" class="icons">
          
            <i class='bx bx-menu' id="menu-icon"></i>
           
            <i class="bx bx-x" id="close-icon"></i>
        </label>

        <nav class="navbar">
            <a href="#landing">HOME</a>
            <a href="abouts">ABOUT</a>
            <a href="">GALLERY</a>
            <a href="">CONTACT</a>        
            <a href="">SIGN IN</a> 
            <a href="">LOGIN</a> 
        </nav>
    </header>
    </div>
  )
}

export default Header
