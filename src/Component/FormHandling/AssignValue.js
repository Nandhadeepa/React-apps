import React, { Component } from 'react'

export class AssignValue extends Component {
    constructor(props) {
        super(props)
      
        this.state = {
           firstname:'',
           lastname:'',
           city:''
  
        }
    }
    changefirstnameHandler=(event)=>{
        console.log(event.target.value  )
        this.setState({firstname:event.target.value})
    }
    changelastnameHandler=(event)=>{
        console.log(event.target.value  )
        this.setState({lastname:event.target.value})
    }
    changecityHandler=(event)=>{
        console.log(event.target.value  )
        this.setState({city:event.target.value})
    }
    submitHandler=(event)=>{
        event.preventDefault();
        console.log(this.state)
    }
    resetHandler=(event)=>{
        this.setState({firstname:'',lastname:'',city:''})
    }
  render() {
    return (
        <div className='alert alert-success '>User Sign-up
        <form onSubmit={this.submitHandler}>
        First Name : <input type='text' defaultValue={this.state.firstname} onChange={this.changefirstnameHandler}/>
        <br/>
        Last Name : <input type='text'defaultValue={this.state.lastname} onChange={this.changelastnameHandler}/>
        <br/>
        City :  
        <select defaultValue={this.state.city} onChange={this.changecityHandler}>
            <option value=''>--Select--</option>
            <option value="Delhi">Delhi</option>
            <option value="Blg">Blg</option>
            <option value="Pune">Pune</option>
        </select>
        <br/>
        {/* <button type="reset">Reset</button>
        <nsbp/>
        <button type="submit">Submit</button> */}
        <input type='reset' onClick={this.resetHandler}/>
        <input type='submit'/>
      </form>
      </div>
    )
  }
}

export default AssignValue