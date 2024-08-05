import React, { Component } from 'react'

export class LetVariable extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         first:true
      }
    }
  render() {
    let userid
    if(this.state.first == true)
        userid="Admin"
    else
        userid="Guest"
    return (
       
      <div>Welcome, {userid} </div>
    )
  }
}

export default LetVariable