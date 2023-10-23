import React, { Component } from 'react';

class Addtocartbtn extends Component {
    constructor(props){
        super(props)
        console.log(props)
    }
    render() {
        return (
            <>
                <div className="row">
                    <div className='col-md-12'>
                        <div className={this.props.className}>
                            <input onClick={this.props.reviewsend} style={{backgroundColor:"#6a9739"}} className='btn btn-success' type="submit" value={this.props.text} />
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default Addtocartbtn;