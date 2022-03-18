import React, { Component } from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Tips from '../Tips/Tips';
import Wallet from '../Wallet/Wallet'
import './Zpage.css'

class Zpage1 extends Component {
    state = {  } 
    render() { 
        return (
            
            <div className="container-fluid">
                <div className="row">
                    <div className="col">
                        One of three columns
                    </div>
                    <div id="rightcont" className="col-md-4">
                        <Tips/>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default Zpage1;