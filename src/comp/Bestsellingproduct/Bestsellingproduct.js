import React, { Component } from 'react';
import Product from '../Product/Product'
import axios from 'axios';
import Headingh2 from '../Headingh2/Headingh2';
import Reviews from '../Reviews/Reviews';

class Bestsellingproduct extends Component {

    constructor(props) {
        
        super(props)
        console.log(this.props.urltype +" constructor")
        this.state = {
            products: [],
            url: ""
        }

        if (this.props.urltype === "bestselling-product") {
            this.state.url = "http://localhost:3012/product"
        }
        else if (this.props.urltype === "trending-product") {
            this.state.url = "http://localhost:3012/trending"
        }
        else if (this.props.urltype === "reviews") {
            this.state.url = "http://localhost:3012/reviews"
        }


    }
    componentDidMount() {
       console.log(this.props.urltype +" componentDidMount")
       axios.get(this.state.url)
       .then((res) => {
           const product = res.data;

           this.setState({ products: product }); // Update state with product data


        })
       .catch((e) => {
           console.log("Error " + e);
     });
    }


    render() {
        console.log(this.props.urltype +" render")
        return (
            <section>
                <Headingh2 heading={this.props.heading} />

                <div className="row">
                    <div className="col-md-12">
                        <div className="container">
                            <div className="row">

                                {this.state.products.map((p) => {
                                    
                                    return (

                                        <Product key={p.id} name={p.name} price={p.price} category={p.category} image={p.image} />



                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </div>

            </section>
        );
    }
}

export default Bestsellingproduct;