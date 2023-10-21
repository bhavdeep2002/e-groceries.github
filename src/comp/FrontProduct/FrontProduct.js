import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'

export default function FrontProduct() {

  const { id } = useParams()

  // console.log(useState())// useState always returns us an array containing one object and second function
  const [detail, setdetail] = useState({
    id,
    name: "",
    category: "",
    price: "",
    image: ""
  })
  // detail ={name: "",price: "",image: "",category: ""}

  useEffect(() => {
    // Code to run when the component is mounted (equivalent to componentDidMount)
    axios.get(`http://localhost:3012/product/${id}`)
      .then((res) => {
        let re = res.data
        //re contains object inside it 
        // re contains re={id:"",name:"",price:"",category:""} re contains id image,name,price,category of sepecified id in useParams
        // example: {id: 1, name: 'Natural Extracted Edible Oil', price: '£25.00', image: '/image/oil.PNG', category: 'Groceries'}
        console.log(re)
        const { id, name, price, image, category } = re
        setdetail({ ...detail, name, price, category, image })

        // setdetail({...detail,re})



        // detail={previous properties of detail, overwritting name,category,price property}
      })
  }, [id]); // dependency array ensures it runs on mount and when ever id changes

  return (
    <>
      <div className="row">
        <div className="col-md-3" style={{ width: "20%" }}></div>
        <div className="col-md-9"><img id='bestselling' src={detail.image} alt="" /></div>
      </div>
      <div className="row">
        <div className="col-md-12">
          
        </div>
      </div>


    </>
  )
}
