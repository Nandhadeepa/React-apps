import React, { Component } from 'react'

export class Child extends Component {
    constructor(props) {
        super(props)
      
        this.state = {
           first:"Guest"
        }
        console.log("Child Constructer")
      }
      static getDerivedStateFromProps(props,state)
      {
        console.log("Child getDerivedStateFromProps")
        return props
      }
      componentDidMount(){
        console.log("Child componentDidMount")
      }
      updateUserName(){
        this.setState({first:"John"})
      }
      componentDidUpdate()
      {
        console.log("Child Component Did Update")
        return true
      }
      shouldComponentUpdate(){
        console.log("Child shouldComponent Update")
        return true
      }
      getSnapshotBeforeUpdate(prevprops,prevstate)
    {
      console.log("Child Get Snapshot before update")
      return null
    }
    render() { 
        console.log("Child Render")
    return (
      <div>
        <h1>{this.state.first}</h1>
        <button onClick={()=>this.updateUserName()}>Updte ChildUserName</button>
      </div>
    )
  }
}

export default Child