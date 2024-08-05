import React, { Component } from 'react'

export class ShortCircuitOperator extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         first:true
      }
    }
  render() {
    return (
        this.state.first==true &&
      <div>ShortCircuitOperator</div>
      //Only one can be returned no else statement
    )
  }
}

export default ShortCircuitOperator