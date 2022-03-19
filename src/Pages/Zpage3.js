import React, { Component } from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Tips from '../Tips/Tips';
import Wallet from '../Wallet/Wallet'
import './Zpage.css'
import Subs from '../Subs/Subs';

class Zpage3 extends Component {
    state = {  } 
    render() { 
        return (
            
            <div className="container-fluid">
                <div className="row">
                    <div className="col mx-5 mt-5">
                        <h2>Excel Digital Marketing Institute</h2>
                        <hr/>
                        <p>Join 200,000+ students in the bestselling digital marketing course on Excel Digital Marketing Institute!
                            With over 20 hours of training, quizzes and practical steps you can follow - this is one of the most comprehensive digital marketing courses available.<br/> We'll cover SEO, YouTube Marketing, Facebook Marketing, Google Adwords, Google Analytics and more!</p>
                        <br/>
                        <h5>What you'll learn:</h5>
                        <ul>
                            <li>Grow a Business Online From Scratch</li>
                            <li>Make Money as an Affiliate Marketer</li>
                            <li>Land a High-Paying Job in Digital Marketing</li>
                            <li>Work From Home as a Freelance Marketer</li>
                        </ul>
                        
                    </div>
                    <div id="rightcont" className="col-md-4">
                        <Subs/>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default Zpage3;