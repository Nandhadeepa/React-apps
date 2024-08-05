import React from 'react'
import ReactDOM from 'react-dom'
import './Header.css'
function PortalDemo() {
  return ReactDOM.createPortal(
    <div className='header '>
        <p>Welcome to PortalDemo</p>
    </div>,
    document.getElementById("Header")
  )
}

export default PortalDemo