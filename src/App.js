import React, { Component } from 'react';
import Navbar from './Navbar';
import Details from './Details/Details';
import Wallet from './Wallet/Wallet';
import Organizer from './Organizer';
import Home from './Home';
import Zapshome from './Zaps/Zapshome';

class App extends Component {
    state = {  } 
    render() { 
        return (
            <div>
                <Navbar/>
                <Zapshome/>
                
            </div>
            
        );
    }
}
 
export default App;