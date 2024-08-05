import React, { Component } from 'react'

export class BootstrapSingleProp extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       firstname:'',
       age:'',
       gender:'Male'
    }
  }
  changeHandler=(event)=>{
    
    const{name,value}=event.target
    this.setState({[name]:value})
    console.log(this.state)
  }
  submitHandler=(event)=>{
    event.preventDefault()
    console.log(this.state)
  }
    render() {
    return (
      <div className='container'>
        <form onSubmit={this.submitHandler}>
        <div className='row'>
            <div className='col'>
                <label className='form-label'>Name</label>
                <input type='text' className='form-control' defaultValue={this.state.firstname} name='firstname' onChange={this.changeHandler}/>
            </div>
            </div>
            <div className='row'>
            <div className='col'>
                <label className='form-label'>Age</label>
                <input type='text' className='form-control' defaultValue={this.state.age} name='age' onChange={this.changeHandler}/>
            </div>
            </div>
            <div className='row'>
                <div className='col'>
                    <label className='form-label'>Gender</label>
                    <input type = "radio" className='form-check-input' name="gender" value="Male"  defaultChecked={this.state.selectedoption=='Male'} gender='gender'onChange={this.changeHandler}/>Male
                    <input type = "radio" className='form-check-input' name="gender" value="Female"  defaultChecked={this.state.selectedoption=='Female'} gender='gender' onChange={this.changeHandler}/>Female
                </div>
            </div>
            <div className='row'>
                <div className='col'>
                <input type='reset' className='btn btn-warning m-2 p-2'/>
                <input type='submit'className='btn btn-primary m-2 p-2'/>
                </div>
            </div>
            </form>
        </div>
        
            )
        }
}

export default BootstrapSingleProp