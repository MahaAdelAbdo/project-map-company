import React from 'react'
 
import "./Body.css"
const Body = () => {
  return (
    <div className='Body'>
        <div className='continer'>
            {/* <div className="body-iamge">
                <img src="https://images.pexels.com/photos/1109543/pexels-photo-1109543.jpeg?auto=compress&cs=tinysrgb&w=800"    />
            </div> */}
           <div className='Body-text'>
             <h1>About Us</h1>
            <p>With a motivated and modern organization and a widespread network of overseas offices, ITA provides information, assistance, consulting, promotion and training to Italian small and medium-sized businesses. Using the most modern multi-channel promotion and communication tools, it acts to assert the excellence of Made in Italy in the world.</p>
       
             <button variant="contained">Contained</button>
                  </div>
        </div>
    </div>
  )
}

export default Body