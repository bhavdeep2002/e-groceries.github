import React, { Component } from 'react';

class Productcard extends Component {
  constructor(props) {
    super(props)
     
    this.state={
      img : this.props.image,
      category : this.props.category,
      name:this.props.name,
      price:this.props.price
    }
   
  }
  render() {
    // console.log("product card")
    return (
      <div className="card">
        <a href="#">
        
          <img className="card-img-top product-image" src={this.state.img} />
         
        </a>
        <div className="card-body">
          <div className="category">{this.state.category}</div>
          <a href="#" className="productname">
            <h5 className="card-title">{this.state.name}</h5>
          </a>
          <p className="card-text">{this.state.price}</p>
          <img className="fivestar" src="image/5-Stars-PNG-HD.png"/>
        </div>
      </div>
    );
  }
}

export default Productcard;