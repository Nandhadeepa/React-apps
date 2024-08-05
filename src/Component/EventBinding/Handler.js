import React, { Component } from 'react'

export class Handler extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
        msg:"Good Morning"
    }
    this.changeMessage= this.changeMessage.bind(this)
  }
  changeMessage()
  {
    this.setState({msg:'Good evening'})
  }
    render() {
    return (
      <div>
        <h1>{this.state.msg}</h1>
        <button onClick={this.changeMessage}>Change Message</button>
      </div>
    )
  }
}

export default Handler