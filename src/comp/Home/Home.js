import React, { Component } from 'react';
import Servicecontainer from '../Service-container/Servicecontainer';
import Storedetail from '../StoreDetails/Storedetail';

class Home extends Component {
    render() {
        return (
            <div className="container-flex background-color">
                <div className="row">
                    <div className="col-md-12 upper-margin"></div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-3" style={{ width: "20%" }}></div>
                                <div className="col-md-9"><img id='bestselling' src="/image/bestselling.PNG" alt="" /></div>
                            </div>
                        </div>
                    </div>
                    {/*Store banner Best Quality Products */}
                    <Storedetail />
                </div>
                {/*Free Shipping */}
               <Servicecontainer />
            </div>
        );
    }
}



export default Home;


