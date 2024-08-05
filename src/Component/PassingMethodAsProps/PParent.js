import React, { Component } from 'react'
import PChild from './PChild'

export class PParent extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       counter:0
    }
    this.inc = this.increment.bind(this)
  }
  increment()
  {
    this.setState({counter:this.state.counter+1})
  }
    render() {
    return (
      <div>Parent
        <h2>{this.state.counter}</h2>
      <PChild text = {this.inc}/>
      {/* TO pass function you have to use props */}
      </div>
    )
  }
}

export default PParent