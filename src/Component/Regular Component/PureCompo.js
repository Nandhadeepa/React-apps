import React, { Component, PureComponent } from 'react'

export class Purecompo
 extends PureComponent {
    constructor(props) {
      super(props)
    
      this.state = {
         first:'steve'
      }
    }
    componentDidMount(){
        setInterval(() => {
            this.setState({first:'steve'})
        }, 2000);
    }
  render() {
    console.log("Out")
    return (
      <div>
        
      </div>
    )
  }
}

export default Purecompo
