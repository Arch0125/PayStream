import React, { Component } from 'react';

import './Details.css'
import getWeb3 from "../getWeb3";

class Details extends Component {
    state = { balance:0,web3: null, accounts: null, addr:'', ethscan:''};

  componentDidMount = async () => {
    try {
      // Get network provider and web3 instance.
      const web3 = await getWeb3();

      // Use web3 to get the user's accounts.
      const accounts = await web3.eth.getAccounts();
      var account = accounts[0]
      var acc = account.slice(0,9)+'...'+account.slice(35)

      var bal = await web3.eth.getBalance(account)
      bal = web3.utils.fromWei(bal)
      

      // Get the contract instance.
      var ethscan = "https://etherscan.io/address/"+account
      // Set web3, accounts, and contract to the state, and then proceed with an
      // example of interacting with the contract's methods.
      this.setState({ethscan:ethscan})
      this.setState({addr:acc})
      this.setState({balance:bal})
      this.setState({ web3, accounts});
      
    } catch (error) {
      // Catch any errors for any of the above operations.
      alert(
        `Failed to load web3, accounts, or contract. Check console for details.`,
      );
      console.error(error);
    }
  };

  getDetails = async() =>{
    
  }

  render() {
    
    return (
      
      <div className='walletcard' >
          <label className='title' > Account Details 🔍</label>
          <p className='details' >Account Address</p>
          <label className='output'>{this.state.addr}</label>
          <p className='details' >Account Address</p>
          <label className='output'>{this.state.balance} ETH</label>
          <br/>
          <br/>
          <a href={this.state.ethscan} target='_blank' className='ethscan'>View account on etherscan <i class="fa fa-external-link"></i> </a>
      </div>
    );
  }
}
 
export default Details;