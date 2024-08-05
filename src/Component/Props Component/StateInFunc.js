import React, { useState } from 'react'

function StateInFunc() {
    const[count,setvalue]=useState(0)
    const[username,setUsername]=useState('Guest')
    function increment()
    {
        setvalue(count+1)
    }
    function changename()
    {
        if(username=='Guest')
            setUsername('Admin')
        else
            setUsername('Guest')
    }
  return (
    <div>StateInFunc
        <h1>{count}</h1>
        <button onClick={()=>increment()}>Increment</button>
        <h1>{username}</h1>
        <button onClick={()=>changename()}>Login</button>
    </div>

  )
}

export default StateInFunc