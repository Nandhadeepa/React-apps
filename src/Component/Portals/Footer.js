import React from 'react'
import ReactDom from 'react-dom'
import './footer.css'
function Footer() {
    
  return ReactDom.createPortal (
    <div className='footer'>
        <p> Copyright Information</p>
    </div>,
    document.getElementById("Footer")
  )
}

export default Footer