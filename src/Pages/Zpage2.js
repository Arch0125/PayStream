import React, { Component } from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Tips from '../Tips/Tips';
import Wallet from '../Wallet/Wallet'
import './Zpage.css'
import Subs from '../Subs/Subs';
import Ticket from '../Ticket/Ticket';

class Zpage2 extends Component {
    state = {  } 
    render() { 
        return (
            
            <div className="container-fluid">
                <div className="row">
                    <div className="col mx-5 mt-5">
                        
                        <h2>Zap Fest 🎉</h2>
                        <hr/>
                        <p className='mr-5'> The South York University College of Music invites you to participate in the Summer Music Festival. Competitions and performances of various instruments and music genres will be featured. Please contact Gerald Duncan thru geraldduncan@musicfestyork.edu for registration details. </p>
                        <br/>
                        <p><span className='bullet'>I</span> Ticket Price : 10 MATIC</p>
                        <p><span className='bullet'>I</span> Date : 1 to 5 June, 2022</p>
                        <p><span className='bullet'>I</span> Location : Albert Hall</p>
                        <p><span className='bullet'>I</span> Timings : 10AM - 5PM</p>
                        <br/>
                        <h4>Share this on :</h4>
                        <hr/>
                        <i className="fa fa-facebook px-1"></i>
                        <i className="fa fa-twitter px-1"></i>
                        <i className="fa fa-instagram px-1"></i>
                        <h5 className='mt-4'>Terms and Conditions :</h5>
                        <label>This is a sample Payment Page created by PayStream Zaps for demo purposes only.<br/> Please do not send any real coins while transacting on this page, you may lose your coins. </label>
                    </div>
                    <div id="rightcont" className="col-md-4">
                        <Ticket/>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default Zpage2;