import React from 'react'

function ProductComponent(props) {

    if(props.category!="Electronics"){
        throw new Error('Invalid category')
    }

    return (
    <div>
        <h1>{props.name}</h1>
    </div>
  )
}


export default ProductComponent