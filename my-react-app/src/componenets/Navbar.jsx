import React, { useEffect, useState } from 'react'
import './Navbar.scss'
const Navbar = () => {
  const [active , setActive] = useState(false);

  const isActive = () => {
      window.scrollY > 0 ?
        setActive(true)
       :
        setActive(false);
      
    }
  
  useEffect(() => {
      window.addEventListener('scroll', isActive);
      return () => {
        window.removeEventListener('scroll', isActive);
      }
  },[]);
  return (
    <div className={active ? 'navbar active' : 'navbar'}>
      <div className="container">
        <div className="logo">
          <span className='text'>fiverr</span>
          <span className='dot'>.</span>
          {/* <input type="text" placeholder='What services are you looking for today!' /> */}
            {/* svg */}  
       </div>
        <div className="links">
          <span>Fiverr Pro</span>
          <span>Explore</span>
          {/* Svg */}
          <span>English</span>
          <span>Become a Seller</span>
          <span>Sign In</span>
          <button>Join In</button>
        </div>
      </div>
      
     {active && (
      <>
       <hr />
      <div className='lowerNavbar'>
       
       <span>test1</span>
       <span>test2</span>
       <span>test3</span>
       <span>test4</span>
       <span>test5</span>
       <span>test6</span>
       <span>test7</span>
       <span>test8</span> 
     </div>
       <hr />
       </>
     )}
   
    
    </div>
    
  )
}

export default Navbar