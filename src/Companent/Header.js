import React from 'react'
 
import {ImFileText2} from "react-icons/im"
import {IoEarth} from "react-icons/io5"
import {HiOutlineLockClosed} from "react-icons/hi"
import "./Header.css"
const Header = () => {
  return (
    <div className='Header'>
        <div className='title'>
        <div className='continer'> 
        <h1>Welcome to Central Business Agency</h1>
        <h5>Trade & Investment Agency</h5>
        <button variant="contained">Contained</button>
        </div>
           
        {/* card-map */}
        <div className='textwithlogo'>
        <div className='continer'>
        <div className='text_one'>
        <div className='logo'>
        <ImFileText2/>
        </div>
        <h3>Multi-Purpouse</h3>
        <p>Sample text. Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc justo sagittis suscipit ultrices.</p>
        </div>
        <div className='text_one'>
        <div className='logo'><IoEarth/>
        </div>

        <h3>Easy To Use</h3>
        <p>Sample text. Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc justo sagittis suscipit ultrices.</p>
        </div>
        <div className='text_one'>
        <div className='logo'>
        <HiOutlineLockClosed/>
        </div>
        <h3>Great Quality</h3>
        <p>Sample text. Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc justo sagittis suscipit ultrices.</p>
        </div>
        </div>

        </div>
   
    </div>
    </div>
  )
}

export default Header;