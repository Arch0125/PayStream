import React, { Component } from 'react';
import "./Organizer.css"
import Details from './Details/Details'
import Wallet from './Wallet/Wallet'
import Upload from './IPFSUpload/Upload'
import FileSender from './IPFSSend/FileSender';


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
                    <FileSender/>
                    
                </div>
             </div>
             
             
         );
     }
 }
  
 export default Organizer;