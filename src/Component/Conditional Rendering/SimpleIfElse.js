import React, { Component } from 'react'

export class SimpleIfElse extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         first:true
      }
    }
    render() {
        if (this.state.first == true)
        {
            return (
                <div>Welcome Admin</div>
              )
        }
        else 
            {
                return (
                    <div>Welcome Guest</div>
                  )
            }
        // return(
        //   {
        //     if(this.state.first == true)
        //     {
        //       <div>Admin</div>
        //     }
        //     else{
        //       <div>Guest</div>
        //     }
        //   }
        // )
        }
}

export default SimpleIfElse