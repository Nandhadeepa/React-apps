import React from 'react'

export default function Product(props) {
  return (
    <div>
    <h1>Employee Details</h1>
    <h2>ID:{props.id}</h2>
    <h2>Name:{props.name}</h2>
    <h2>{props.children}</h2>
    </div>
  )
}
