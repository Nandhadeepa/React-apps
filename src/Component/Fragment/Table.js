import React, { Component } from 'react'
import THead from './THead'
import TBody from './TBody'
export class Table extends Component {
  render() {
    return (
      <div>
        <table className='table table-bordered'>
            <THead/>
            <TBody/>
        </table>
      </div>
    )
  }
}

export default Table