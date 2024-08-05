import React, { Component } from 'react'

export class Conditionaloperator extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         first:true
      }
    }
  render() {
    return (
      this.state.first?
      <div>Welcome,Admin</div>:
      <div>Welcome,Guest</div>
    )
  }
}

export default Conditionaloperator