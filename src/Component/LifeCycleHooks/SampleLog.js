import React, { Component } from 'react'
import Child from './Child'

export class SampleLog extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         first:"Test"
      }
      console.log("Parent Constructer")
    }
    static getDerivedStateFromProps(props,state)
    {
      console.log("Parent getDerivedStateFromProps")
      return props
    }
    componentDidMount(){
      console.log("Parent componentDidMount")
    }
    shouldComponentUpdate(){
      console.log("Parent shouldComponent Update")
      return true
    }
    componentDidUpdate(){
      console.log("Parent Component Did Update")
    }
    updateUserName(){
      this.setState ({first:'Admin'})
    }
    getSnapshotBeforeUpdate(prevprops,prevstate)
    {
      console.log("Parent Get Snapshot before update")
      return null
    }
  render() {
    console.log("Parent Render")
    return (
    
      <div>
        <h1 > {this.state.first}</h1>
        <button onClick={()=>  this.updateUserName()}>Update UserName</button>
        <Child/>
      </div>
    )
  }
}

export default SampleLog