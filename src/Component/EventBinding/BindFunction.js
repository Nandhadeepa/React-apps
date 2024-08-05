import React, { Component } from 'react'

export class BindFunction extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       first:"Good Morning"
    }
  }
  changefun()
  {
    this.setState({first:"Good eveing"})
  }
    render() {
    return (
      <div>BindFunction
        <h1>{this.state.first}</h1>
        <button type='button' onClick={this.changefun.bind(this)}>Change Request</button>
      </div>
    )
  }
}

export default BindFunction
