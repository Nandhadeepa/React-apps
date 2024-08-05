import React, { Component } from 'react'

export class SimpleForm extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         firstname:'Mike',
         lastname:'John',
         city:'Blg'

      }
    }
  render() {
     const {firstname,lastname,city}=this.state.props
     return(
      <form>
        First Name : <input type='text' defaultValue={firstname}/>
        <br/>
        Last Name : <input type='text'defaultValue={lastname}/>
        <br/>
        City :  
        <select defaultValue={city}>
            <option value=''>--Select--</option>
            <option value="Delhi">Delhi</option>
            <option value="Blg">Blg</option>
            <option value="Pune">Pune</option>
        </select>
        <br/>
        {/* <button type="reset">Reset</button>
        <nsbp/>
        <button type="submit">Submit</button> */}
        <input type='reset'/>
        <input type='submit'/>
      </form>
      )
    
  }
}

export default SimpleForm