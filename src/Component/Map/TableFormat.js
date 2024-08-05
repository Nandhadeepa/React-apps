import React from 'react'

function TableFormat() {
  const EmployeeList=[{name:'John',city:'BLG'},{name:'Steve',city:'BLG'}]
  return (
    <div>
      <table border={1} className='table table-responsive table-bordered'>
        <thead>
          <tr className='table-success'>
          <th>Name</th>
          <th>City</th>
          </tr>
        </thead>
        <tbody>       
            {
              EmployeeList.map((employee,i)=>             
                <tr key={i}>
                <td>{employee.name}</td>
                <td>{employee.city}</td>
                </tr> 
              )
            }
        </tbody>
      </table>
    </div>
  )
}

export default TableFormat