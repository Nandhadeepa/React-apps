import React from 'react'
import demo from './Demo.module.css'
function Modulecss() {
    
  return (
    <div>
        <h1 className={demo.red}>Red</h1>
        <h1 className={demo.green}>Green</h1>
        <h1 className={demo.blue}>Blue</h1>
    </div>
  )
}

export default Modulecss