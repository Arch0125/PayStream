import React, { Component } from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Tips from '../Tips/Tips';
import Wallet from '../Wallet/Wallet'
import './Zpage.css'
import Subs from '../Subs/Subs';

class Zpage1 extends Component {
    state = {  } 
    render() { 
        return (
            
            <div className="container-fluid">
                <div className="row">
                    <div className="col mx-5 mt-5">
                        <h2>OG Gamer's</h2>
                        <hr/>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        <br/>
                        <h3>Subscription Tiers</h3>
                        <hr/>
                        <div className="row mt-5">
                            <div className="col">
                                <div className='zcard'>
                                    <h5 className='tier'>TIER 1</h5>
                                    <hr/>
                                    <label>1 MATIC/month</label>
                                    <br/>
                                    <label className='ltext' >
                                    ⚡ Access to premium discord channels
                                        <br/>⚡ Members only streams
                                    </label>
                                </div>
                            </div>
                            <div className="col">
                                <div className='zcard'>
                                <h5 className='tier'>TIER 2</h5>
                                    <hr/>
                                    <label>5 MATIC/month</label>
                                    <br/>
                                    <label className='ltext' >
                                    ⚡ Access to premium discord channels
                                        <br/>⚡ Members only streams
                                        <br/>⚡ Be on Live stream
                                    </label>
                                </div>
                            </div>
                            <div className="col">
                                <div className='zcard'>
                                <h5 className='tier'>TIER 3</h5>
                                    <hr/>
                                    <label>10 MATIC/month</label>
                                    <br/>
                                    <label className='ltext' >
                                    ⚡ Access to premium discord channels
                                        <br/>⚡ Members only streams
                                        <br/>⚡ Be on Live stream
                                        <br/>⚡ Group chill-out sessions
                                        <br/>⚡ Exclusive Giveaways
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="rightcont" className="col-md-4">
                        <Tips/>
                        <Subs/>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default Zpage1;