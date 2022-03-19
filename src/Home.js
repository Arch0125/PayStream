import React, { Component } from 'react';
import './Home.css'

class Home extends Component {
    state = {  } 
    render() { 
        return (
            <div className='container-fluid'>
                <div className='home' >
                    <label className='intro'>Welcome to PayStream</label>
                    <h4 className='htagline'>Redefining Decentralised Finance</h4>
                </div>
                <div class="row ml-5 mr-5 mb-5">
                    <div class="col">
                        <p className='hdesc'>With the power of Superfluid Protocol and IPFS, PayStream provides you Payment Streaming, Transferring Payrolls, Registering events and a lot more all under one dashboard.</p>
                        <p className='hdesc'>If you're <span className='htagline'>Organizer</span>, <span className='htagline'>Creator</span>, <span className='htagline'>Artist</span> or a <span className='htagline'>Fan</span> we've got everything that suits you</p>

                    </div>
                    <div class="col-md">
                        <img src="https://remitec.co.uk/wp-content/themes/remitec_site/assets/img/intro.gif" className='img-fluid' />
                    </div> 
                </div>
                <div id="zap" className='home' >
                    <label className='zaptitle'>⚡ Introducing Zap Pages ⚡</label>
                    <p className='hdesc' >Create your own Customised Payment pages to handle your subscriptions, fees, events</p>
                    <button className='btn'>Try it out</button>
                </div>

                <div className="row mt-5 mb-5">
                    <div id='leftcont' className="col border-right border-primary">
                        <label className='intro' >Organizer's Dashboard</label>
                    </div>
                    <div className="col">
                    <label className='hdesc'>Send Payments <br/> Upload and send documents through IPFS <br/> Get account details</label>
                    <br/>
                    <button className='dash'>View Dashboard</button>
                    </div>
                </div>

                <div className="row mt-5 mb-5">
                    <div id='leftcont' className="col">
                        <label className='hdesc'>Create and edit Streams <br/>Manage Subscriptions<br/>Transfer Payrolls</label>
                        <br/>
                        <button className='dash'>Start Streaming</button>
                    </div>
                    <div  className="col border-left border-primary">
                        <label className='intro' >Streaming Dashboard</label>
                    </div>
                </div>

                <div class="end">
                    <div class="tools">
                    </div>
                    <div class="end__content</div> mt-5">
                        <label>This is the beta version of PayStream
                            <br/>We are giving our best to bring the service live as soon as possible
                            <br/>Till then enjoy and let us know what we can do to make it better
                        </label>
                        <br/>
                        <label>This project is powered by </label>
                        <br/>
                        <img className='mr-2' src='https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/xhwcodrzvkpktyzwfjjw' width={"100px"} />
                        <img className='bg-white px-1 py-1 mr-2' width={"100px"} src='https://uploads-ssl.webflow.com/5f9a1900790900e2b7f25ba1/611f9d12419f2e2b75f158fb_polygon-logo.svg' />
                        <img className='bg-white' width={"70px"} src='https://upload.wikimedia.org/wikipedia/commons/c/c2/IPFS_logo.png'/>
                    </div>
                    </div>
        
            </div>
        );
    }
}
 
export default Home;