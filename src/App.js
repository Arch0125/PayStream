import React, { Component } from 'react';
import Navbar from './Navbar';
import Details from './Details/Details';
import Wallet from './Wallet/Wallet';

class App extends Component {
    state = {  } 
    render() { 
        return (
            <div>
                <Wallet/>
                
            </div>
            
        );
    }
}
 
export default App;