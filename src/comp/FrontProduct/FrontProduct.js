import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { Link, Outlet, useParams } from 'react-router-dom'

export default function FrontProduct() {
  const { id } = useParams() // useParams Hook returns an object of property name specified in <Route path='ProductDetail/:id' element={<ProductDetail /> } > here property name would be id and different product on click pasted different id in url by Link and Route will match the path, destructuring object to get id property
  // console.log(useParams())

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
        // console.log(re)
        const { id, name, price, image, category } = re
        //destructuring object properties

        setdetail({ ...detail, name, price, category, image })
        // detail={previous properties of detail, overwritting name,category,price property}
      })
  }, [id]); // dependency array ensures it runs on mount and when ever id changes

  return (
    <>
      <div className="row">
        <div className="col-md-1"></div>
        <div className="col-md-10">
          <div className="container-flex">
            <div className="row">
              <div className="col-md-6"><img id='bestselling' src={detail.image} alt="" /></div>
              <div className="col-md-6">description</div>
            </div>
            <div className="row">
              <div className="col-md-12" style={{height:"80px"}}></div>
            </div>
            <div className="row">
              <div className="col-md-1">
                <Link to={`/ProductDetail/${id}/Description`}>Description</Link> {/* the path in 'to={}' is going to pasted inside url only. from where our Route will match the the corresponding path */}
                {/*and useParams returning an object which contains id property and we are just destructured that object to get id property */}
              </div>
              <div className="col-md-1">
                <Link to={`/ProductDetail/${id}/Review`}>Review</Link>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-1"></div>
      </div>
    </>
  )
}
