import React from 'react'

function Chid() {
    console.log("Child")
    return (
    
    <div>Chid</div>
  )
}

export default React.memo(Chid)