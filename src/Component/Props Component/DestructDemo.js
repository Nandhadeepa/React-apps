import React, { Component } from 'react'

export class DestructDemo extends Component {
  render() {
    
        const{id,name,city}=this.props
        return (
          <div>
            Details:
            <br/>
            ID:{id}
            <br/>
            Name:{name}
            <br/>
            City:{city}
          </div>
        )
      
    
  }
}

export default DestructDemo