import React, { Component } from 'react'
import './Style.css'
export class SimpleExternalcss extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         first :false
      }
    }
  render() {
    const cssclassname = this.state.first? 'online':'offline'
    return (
      <div>
        <p className={cssclassname}>Color</p>
      </div>
    )
  }
}

export default SimpleExternalcss