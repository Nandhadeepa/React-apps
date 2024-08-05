import React, { Component } from 'react'

export class WithBootStrap extends Component {
    constructor(props) {
        super(props)
      
        this.state = {
           firstname:'',
           lastname:'',
           city:'',
           isexistinguser:''
  
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
    changeisexisinguserHandler=(event)=>{
        console.log(event.target.value  )
        this.setState({isexistinguser:event.target.value})
    }
    submitHandler=(event)=>{
        event.preventDefault();
        console.log(this.state)
    }
    resetHandler=(event)=>{
        this.setState({firstname:'',lastname:'',city:'',isexistinguser:''})
    }
  render() {
    return (
        <div className='alert alert-success '>User Sign-up
        <form onSubmit={this.submitHandler}>
        First Name : <input type='text' className='form-control' defaultValue={this.state.firstname} onChange={this.changefirstnameHandler}/>
        <br/>
        Last Name : <input type='text' className='form-control' defaultValue={this.state.lastname} onChange={this.changelastnameHandler}/>
        <br/>
        City :  
        <select className='form-control' defaultValue={this.state.city} onChange={this.changecityHandler}>
            <option value=''>--Select--</option>
            <option value="Delhi">Delhi</option>
            <option value="Blg">Blg</option>
            <option value="Pune">Pune</option>
        </select>
        Is Existing User:
        <br/>
        
    
        <input type="radio" className=" form-check-input p-2" name='UserType' value='New' defaultChecked={this.state.selectedoption=='New'} onChange={this.changeisexisinguserHandler}/>New
        <br/>
        <input type="radio"  className="form-check-input p-2" name='UserType' value='Existing' defaultChecked={this.state.selectedoption=='Existing'} onChange={this.changeisexisinguserHandler}/>Existing
        <br/>
        {/* <button type="reset">Reset</button>
        <nsbp/>
        <button type="submit">Submit</button> */}
        
            <button type='reset' className='btn btn-primary m-2 p-2'onClick={this.resetHandler}>Reset</button>
            <button type='submit'className='btn btn-primary m-2 p-2'>Submit</button>
       
      </form>
      </div>
    )
  }
}

export default WithBootStrap