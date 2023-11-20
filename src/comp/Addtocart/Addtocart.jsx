import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

export default function Addtocart(props) {
  const [state,setstate] = useState("")
  useEffect(()=>{
    setstate({name:props.name})
  },[props])
  return (
    <h1>{console.log(state)}
    {state.name}</h1>
  )
}
