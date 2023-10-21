import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Productcard extends Component {
  constructor(props) {
    super(props)
     
    this.state={
      img : this.props.image,
      category : this.props.category,
      name:this.props.name,
      price:this.props.price,
      id:this.props.id
    }
    
   
  }
  
  render() {
    // ("product card")
    return (
      <div className="card">
        <Link to="/ProductDetail">
        
          <img className="card-img-top product-image" src={this.state.img} />
         
        </Link>
        <div className="card-body">
          <div className="category">{this.state.category}</div>
          <Link to={`/ProductDetail/${this.state.id}`} className="productname">
            <h5  className="card-title">{this.state.name}</h5>
          </Link>
          <p className="card-text">{this.state.price}</p>
          <img className="fivestar" src="image/5-Stars-PNG-HD.png"/>
        </div>
      </div>
    );
  }
}

export default Productcard;