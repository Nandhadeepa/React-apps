import React, { Component } from 'react'

export class Employee extends Component {
  render() {
    return (
      <div>
        <h1>Employee Details</h1>
        <h2>ID:{this.props.id} </h2>
        <h2>Name:{this.props.name}</h2>
        {this.props.children}
      </div>
    )
  }
}

export default Employee