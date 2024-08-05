import React, { Component } from 'react'

export class EBinding extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         first:'Good Morning'
      }
    }
    changemsg=()=>
    {
        this.setState({first:"Good Evening"})
    }
  render() {
    return (
      <div>EBinding
        <h1>{this.state.first}</h1>
        <button onClick={this.changemsg}>Change Message</button>
      </div>
    )
  }
}

export default EBinding