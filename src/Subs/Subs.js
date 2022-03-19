import React, { Component } from 'react';
import { useState } from 'react';
import CopyToClipboard from 'react-copy-to-clipboard';
import copy from "copy-to-clipboard";
import './Subs.css'

const Subs =()=> {

    let address = "0xA13BEB3C022F75C89E57CAE30224B6408297F2d9"

    var copyText=address;
    
    const copyToClipboard = () => {
       copy(copyText);
       alert(`You have copied "${copyText}"`);
    }
    
        return (
            <div className='subscard'>
                <label className='substitle'>Subscription Details</label>
                <label>Copy the Details stated below and Add Subscription</label>
                <input
                    placeholder='Account Address'
                    value="0xA13BEB3C022F75C89E57CAE30224B6408297F2d9"
                    className='adr'
                />
                <a className='cpy' onClick={copyToClipboard}><i class="fa fa-clone" aria-hidden="true"></i></a>
                <button className='subsbtn' >Subscription Page <i class="fa fa-caret-right" aria-hidden="true"></i></button>
            </div>
        );
    
}
 
export default Subs;