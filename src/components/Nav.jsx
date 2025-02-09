import React, { useEffect } from 'react'
import'./Nav.css'
import { useState } from 'react'



function Nav() {
  const[show,setShow]= useState(false)

  /* side effect */

  useEffect(()=>{
    window.addEventListener("scroll",()=>{  

      if(window.scrollY>600){
        setShow(true)
      }
      else{

        setShow(false)
      }
    })

  })




  return (
    <div className={`nav ${show && 'nav-black'}`}>
      <img  width ={'150px'}src=" https://farm6.staticflickr.com/5821/20639706793_8c038faa4a_o.png" alt="" />
    </div>
  )
}

export default Nav