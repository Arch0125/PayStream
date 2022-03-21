import React, { Component } from 'react';
import { Link, HashRouter as Router, Route } from "react-router-dom";
import Navbar from './Navbar';
import Details from './Details/Details';
import Wallet from './Wallet/Wallet';
import Organizer from './Organizer';
import Home from './Home';
import Zapshome from './Zaps/Zapshome';
import Zpage1 from './Pages/Zpage1';
import Zpage2 from './Pages/Zpage2';
import Zpage3 from './Pages/Zpage3';


function App() { 
        return (
            <section>
                <Navbar/>
                <Router>
                <Route exact path="/" component={Home} />
                <Route exact path="/dashboard" component={Organizer} />
                <Route exact path="/zaps" component={Zapshome}/>
                <Route exact path="/zaps/Zapfest" component={Zpage2} />
                <Route exact path="/zaps/OGgamers" component={Zpage1} />
                <Route exact path="/zaps/Excel" component={Zpage3} />                    
                </Router>
            </section>
            
        );
    
}
 
export default App;