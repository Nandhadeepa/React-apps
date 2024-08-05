import React from 'react'

function DestructDemofun(props) {
    const{id,name,city}=props
       
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

export default DestructDemofun