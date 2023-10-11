import React, { Component } from 'react';
import Productcard from '../Productcard/Productcard'
class Product extends Component {
    constructor(props){
        super(props)
    }
    render() {
        
        return (
            <div className="col-md-3">
                <section>
                  
                    <Productcard name={this.props.name} price={this.props.price} category={this.props.category} image={this.props.image} />
                </section>
            </div>
        );
        }
}

export default Product;