import React, { Component } from 'react'

export class Login extends Component {
  //rconst - shortcut
    constructor(){
        super()
        this.state={
            username:"Guest",
            id:"2",
            count:1,
            slider:0
        }
    }
    login()
    {
        this.setState({username:"Admin"})
    }
    increment()
    {
        this.setState({count:this.state.count+1})
    }
    slider()
    {
        var range=parseInt(document.getElementById("range").value)

        this.setState({slider:range})
    }
    render() {
    return (
      <div>Welcome {this.state.username}, {this.state.id}  
      <br/>
      <button type="button" onClick={()=>this.login()}>Login</button>
      <br/>
      <button type="button" onClick={()=>this.increment()}>{this.state.count}</button>
       <br/>
       <input type="range" id="range" min={0} max={100} value={this.state.slider} onChange={()=>this.slider()}/>
       <p>{this.state.slider}</p>
       </div>
    )
  }
}

export default Login