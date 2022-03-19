import React, { Component } from "react";
import SimpleStorageContract from "./contracts/SimpleStorage.json";
import getWeb3 from "./getWeb3";
import Wallet from "./Wallet/Wallet";
import Details from "./Details/Details";
import Upload from "./IPFSUpload/Upload";
import "./Navbar.css";

class Navbar extends Component {
  state = { balance:0, storageValue: 0, web3: null, accounts: null, contract: null };

  componentDidMount = async () => {
    try {
      // Get network provider and web3 instance.
      const web3 = await getWeb3();

      // Use web3 to get the user's accounts.
      const accounts = await web3.eth.getAccounts();
      const account = accounts[0]
      var bal = await web3.eth.getBalance(account)
      bal = web3.utils.fromWei(bal)
      

      // Get the contract instance.
      const networkId = await web3.eth.net.getId();
      const deployedNetwork = SimpleStorageContract.networks[networkId];
      const instance = new web3.eth.Contract(
        SimpleStorageContract.abi,
        deployedNetwork && deployedNetwork.address,
      );

      // Set web3, accounts, and contract to the state, and then proceed with an
      // example of interacting with the contract's methods.
      this.setState({balance:bal})
      this.setState({ web3, accounts, contract: instance});
      
    } catch (error) {
      // Catch any errors for any of the above operations.
      alert(
        `Failed to load web3, accounts, or contract. Check console for details.`,
      );
      console.error(error);
    }
  };

  runExample = async () => {
    const { accounts, contract } = this.state;

    // Stores a given value, 5 by default.
    await contract.methods.set(5).send({ from: accounts[0] });

    // Get the value from the contract to prove it worked.
    const response = await contract.methods.get().call();

    

    // Update state with the result.
    this.setState({ storageValue: response });
  };

  showDetails = async () => {
    

    const{accounts,balance} = this.state;
    var accaddr = accounts[0]
    accaddr = accaddr.slice(0,6)+"..."+accaddr.slice(38)
    var bal = balance;
    
    document.getElementById("addr").innerHTML=accaddr
  }

  render() {
    
    return (
      
      <div className="navbar pb-4">
        <img className="logo" src="https://i.postimg.cc/DZZB5rRx/Screenshot-from-2022-03-08-14-56-09.png" width="200px" />
        <a href='#'><label className="navopt">Dashboard</label></a>
        <a href='#'><label className="navopt">Streaming</label></a>
        <a href='#'><label className="navopt">Zaps</label></a>
        <div className="rightcontnav"> 
          <button id="addr" className="cntbtn" onClick={this.showDetails} >Connect Wallet</button>
        </div>
      </div>
      
    );
  }
}

export default Navbar;
