import React, { Component } from 'react'
import Chid from './Chid';

export class Parent extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         first:"Steve"
      }
    }
    componentDidMount(){
    setInterval(() => {
        this.setState({first:'John'})
    }, 2000);
}
  render() {
    console.log("Parent")
    return (
      <div>Parent
        <Chid/>
      </div>
    )
  }
}

export default Parent