import React from 'react'
import "./NumberCount.css"
 import  {useSpring ,animated} from "react-spring"
 import imageOne from "./pexels-photo-322338.jpeg";
 import imageTwo from "./../Companent/pexels-photo-811587.jpeg" ;
 import imageThree from "./printed-circuit-board-print-plate-via-macro-159220.jpeg";
 import imageFour from "./pexels-photo-838413.jpeg"
 import Iframe from 'react-iframe'
function Number({n}) {
  const {number}=useSpring({
    from:{number:0},
    number:n,
    
    config:{mass:1,tension :20,friction:20}
  });
  return <animated.div>{number.to((n)=>n.toFixed(0))}</animated.div>
}
const NumberCount = () => {
   

  return (
    <div className='numberCount'>
        <div className='continer'>
         <div className='numberCount-text'> 
        <h1>Why Work With Us?</h1>   
        <p>Sample text. Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc justo sagittis suscipit ultrices.</p> 
        </div>
        <div data-aos="zoom-in-left"> 
        <div className='controle-number'>
            <div>
              <h1><Number n={150}/></h1>
                <h3>Happy Clients</h3>
            </div>
             <div>
               <h1><Number n={195}/></h1>
                <h3>Projects</h3>
            </div>
             <div>
                <h1><Number n={450}/></h1>
                <h3>Awards</h3>
            </div>
             <div>
                <h1><Number n={205}/></h1>
                <h3>Companys</h3>
            </div>
            </div>
            </div>
        <div className='controle-title'>
            <h1>Start Up & Grow</h1>
            <p>The Start Up & Grow Programme For Those Looking to Launch a Business</p>
        </div>
          <div className='image-four'>
            <img src={imageOne} alt="" />
            <img src={imageTwo} alt="" />
            <img src={imageThree} alt="" />
            <img src={imageFour}alt="" />
        </div>
        <div className='controle-title'>
            <h1>Our Blog</h1>
            <p>Sample text. Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc justo sagittis suscipit ultrices.</p>
        </div>
        <div className='controle-image'> 
        <div className="cal_four">
            <div className='card_empolyee'>
                <img src="https://images.pexels.com/photos/5920774/pexels-photo-5920774.jpeg?auto=compress&cs=tinysrgb&w=800" alt="" />
                <h4>20 Years Experience in the "Funny" Business</h4>
                <p>Sample text. Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc justo sagittis suscipit ultrices.</p>
            </div>
             <div className='card_empolyee'>
                <img src="https://images.pexels.com/photos/3760371/pexels-photo-3760371.jpeg?auto=compress&cs=tinysrgb&w=800" alt="" />
                <h4>We're Here to Help with a Personal Touch</h4>
                <p>Sample text. Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc justo sagittis suscipit ultrices.</p>
            </div>
             <div className='card_empolyee'>
                <img src="https://images.pexels.com/photos/3769135/pexels-photo-3769135.jpeg?auto=compress&cs=tinysrgb&w=800" alt="" />
                <h4>20 Years Experience in the "Funny" Business</h4>
                <p>Sample text. Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc justo sagittis suscipit ultrices.</p>
            </div> 
            </div>
           
                <div className='control_background'> 
                <div className='control-background-text'>
                    <p>Empire State Building</p>
                    <p>350 5th Ave, New York, NY 10118</p>
                    <p>1 212-736-3100</p>
                       <p><a href="/">contacts</a>
                    </p>
                    <div className='control-background-textTwo'>
                        <h4>Contact Us</h4>
                        <p>Get in touch using the details below  alternatively fill out the contact form and we'll be in touch as soon as possible</p>
                    </div>
                     
                  
                </div>
                 <Iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7290573.155684316!2d26.380252021586262!3d26.844717321800264!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14368976c35c36e9%3A0x2c45a00925c4c444!2sEgypt!5e0!3m2!1sen!2seg!4v1671219315447!5m2!1sen!2seg" width="700" height="400" style="border:0;" id="iframe" loading="lazy" referrerpolicy="no-referrer-when-downgrade"/>
               
            </div>
        </div>
        </div>
        
            
       
        
     </div>
  )
}

export default NumberCount;