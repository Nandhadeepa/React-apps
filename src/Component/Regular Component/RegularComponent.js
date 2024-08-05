import React, { Component } from 'react'

export class RegularComponent extends Component {
constructor(props) {
  super(props)

  this.state = {
     first:'steve'
  }
}  
  componentDidMount(){
setInterval(()=>{
    this.setState({first:"Steve"})},2000)}

  
  render() 
  {
    console.log("Check")
  
    return (
      <div>RegularComponent</div>
    )
  }
}

export default RegularComponent