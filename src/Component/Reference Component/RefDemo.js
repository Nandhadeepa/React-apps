import React, { Component } from 'react'

export class RefDemo extends Component {
    constructor(props) {
      super(props)
    
      this.nameref = React.createRef()
         
      
    }
    componentDidMount()
    {
        this.nameref.current.placeholder="enter your name here"
        this.nameref.current.focus()
        this.nameref.current.style.color='red' 
    }
    onclickHandler=()=>
    {
        alert(this.nameref.current.value)
    }
  render() {
    return (
      <div>
        <input type="text" id="text1" name="text1" ref={this.nameref}/>
        <button onClick={this.onclickHandler}>Click here</button>
      </div>
    )
  }
}

export default RefDemo