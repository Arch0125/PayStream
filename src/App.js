import React, { Component } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './Navbar';
import Details from './Details/Details';
import Wallet from './Wallet/Wallet';
import Organizer from './Organizer';
import Home from './Home';
import Zapshome from './Zaps/Zapshome';
import Zpage1 from './Pages/Zpage1';
import Zpage2 from './Pages/Zpage2';
import Zpage3 from './Pages/Zpage3';


class App extends Component {
    state = {  } 
    render() { 
        return (
            <BrowserRouter>
                <Navbar/>
                <Routes>
                    <Route path='/' element={<Home/>} />
                    <Route path='/dashboard' element={<Organizer/>} />
                    <Route path='/zaps' element={<Zapshome/>}/>
                    <Route path='/zaps/OGgamers' element={<Zpage1/>}/>
                    <Route path='/zaps/Zapfest' element={<Zpage2/>}/>
                    <Route path='/zaps/Excel' element={<Zpage3/>}/>
                </Routes>
            </BrowserRouter>
            
        );
    }
}
 
export default App;