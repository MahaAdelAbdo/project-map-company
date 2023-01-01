 
import './App.css';
import Header from './Companent/Header';
import Body from './Companent/Body';
import NumberCount from './Companent/NumberCount';
import Aos from "aos"
import "aos/dist/aos.css"
import { useEffect } from 'react';
 
function App() {
  useEffect(()=>{
    Aos.init({duration:2000})
},[])
  return (
    <div className="App">
   <Header/>
   <Body/>
    <NumberCount/>
    <div data-aos="fade-up"> 
    <div className='footer'>
      <a href="/"> Template</a>
      <p>created with </p>
       <a href="/"> Nicepage</a>
    </div>
    </div>
    </div>
  ) 
}

export default App;
