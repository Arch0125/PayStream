import React, { Component } from 'react';

import './Zapstyle.css'

class Zapshome extends Component {
    render() { 
        return (
            <React.Fragment>
                <div className='zaphead' >
                    <label>✨ Introducing Zaps ✨</label>
                    <br/>
                    <label className='zapintro'> Collect Payments with custom <span className='spcl'>Payment Pages</span> </label>
                    <br/>
                </div>
                
                <div className="row align-items-start">
                    <div className="col">
                        <label className='zapdesc'><span className='spcl'>PayStream Zaps</span> is the easiest way to accept payments with a custom-branded online store<br/>🪙 Accept payments cryptocurrencies with payment receipts.<br/>🪙 Zaps provides you both One-time and Streamed Payment Options.<br/>🪙 Take your service online instantly with zero coding</label>
                    </div>
                    <div className="col">
                        <label className='zapdesc' ><span className='spcl' >Checkout the pages below to discover how you can</span>
                        <br/>
                        <br/><span className='zapfeat'>🎟️ Register Event Attendees</span>
                        <br/><span className='zapfeat'>🎁 Accept Subscriptions and Donations</span>
                        <br/><span className='zapfeat'>💵 Collect Fees</span>
                        </label>
                    </div>
                </div>

                <div className="container">
                    <div className="row align-items-start">
                        <div className="col">
                        <div  id='zapcard' className="card">
                            <img id="zapimg" src="https://cdn.dribbble.com/users/1626229/screenshots/10557069/media/714ac25f35fb84edbdefe458304da146.jpg?compress=1" className="card-img-top" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title">Zap Fest</h5>
                                <p className="card-text">Our annual spring fest consisting music concerts, drama, games and a lot more. Grab your tickets NOW!</p>
                                <a href='/zaps/Zapfest'><button id='zapbutton' className='' >ZAP IT ⚡</button></a>
                            </div>
                        </div>
                        </div>
                        <div className="col">
                        <div id='zapcard' className="card">
                            <img id="zapimg" src="https://www.pngitem.com/pimgs/m/122-1224293_picture-dota-2-og-logo-hd-png-download.png" className="card-img-top" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title">OG Gamers</h5>
                                <p className="card-text">Hey Guys, This is my membership page, Dive in to explore some special uploads and grab the entry to Premium Dicord Channels</p>
                                <a href='/zaps/OGgamers'><button id='zapbutton' className='' >ZAP IT ⚡</button></a>
                            </div>
                        </div>
                        </div>
                        <div className="col">
                        <div id='zapcard' className="card">
                            <img id="zapimg" src="https://cdn-icons-png.flaticon.com/512/60/60752.png" className="card-img-top" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title">Excel Digital Marketing Institute</h5>
                                <p className="card-text">Course: Marketing in a Digital World. Join in to see how we can upskill you and make yourself job-ready</p>
                                <a href='/zaps/Excel'><button id='zapbutton' className='' >ZAP IT ⚡</button></a>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
 
export default Zapshome;