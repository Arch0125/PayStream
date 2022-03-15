import React, { Component } from 'react';
import Navbar from './Navbar';
import Details from './Details/Details';
import Wallet from './Wallet/Wallet';
import Organizer from './Organizer';
import Home from './Home';

class App extends Component {
    state = {  } 
    render() { 
        return (
            <div>
                <Navbar/>
                <Organizer/>
                
            </div>
            
        );
    }
}
 
export default App;