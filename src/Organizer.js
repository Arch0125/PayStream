import React, { Component } from 'react';
import "./Organizer.css"
import Details from './Details/Details'
import Wallet from './Wallet/Wallet'
import Upload from './IPFSUpload/Upload'


 class Organizer extends Component {
     

     render() { 
         return (
             <div>
                <div className='leftcont' >
                    <Details/>
                    <Wallet/>
                </div>
                <div className='rightcont' >
                    <Upload/>
                    
                </div>
             </div>
             
             
         );
     }
 }
  
 export default Organizer;