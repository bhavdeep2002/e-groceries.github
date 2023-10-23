import React from 'react'
import FrontProduct from '../FrontProduct/FrontProduct'
import { Link, Outlet, useParams } from 'react-router-dom'


export default function ProductDetail() {


  return (
    <>
      <div className="container-flex background-color">
        <div className="row">
          <div className="col-md-12 upper-margin"></div>
        </div>
        <FrontProduct />
        <Outlet />{/* this is where our child componet(Description) will render in our parent component */}
      </div>
    </>
  )
}
