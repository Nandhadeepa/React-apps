import React, { Component } from 'react'

export class PChild extends Component {
  render() {
    return (
      <div>
        Child
        <br/>
        <button onClick={this.props.text}>Increment</button> {/* TO pass function you have to use props */}
      </div>
    )
  }
}

export default PChild