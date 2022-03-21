import React, { useState } from "react";
import { ethers, Wallet } from "ethers";
import '../Wallet/Wallet.css'

const startPayment = async ({ setError, setTxs, ether, addr }) => {
  try {
    if (!window.ethereum)
      throw new Error("No crypto wallet found. Please install it.");

    await window.ethereum.send("eth_requestAccounts");
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    ethers.utils.getAddress(addr);
    const tx = await signer.sendTransaction({
      to: addr,
      value: ethers.utils.parseEther(ether)
    });
    console.log({ ether, addr });
    console.log("tx", tx);
    setTxs([tx]);
  } catch (err) {
    setError(err.message);
  }
};


export default function Ticket() {
  const [error, setError] = useState();
  const [txs, setTxs] = useState([]);
  const[ether,setEther]=useState('');
  const[tickets,setTickets]=useState();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    setError();
    await startPayment({
      setError,
      setTxs,
      ether: data.get("ether"),
      addr: data.get("addr")
    });
  };


  return (
    <form className="walletcard" onSubmit={handleSubmit}>
      <div >
        <main>
          <h1 className="title">
            Book your seats now 🎟️
          </h1>
          <div className="my-3">
              <input
                type="text"
                name="addr"
                className="inputbox"
                placeholder="Recipient Address"
                value={"0xA13BEB3C022F75C89E57CAE30224B6408297F2d9"}
                readOnly
              />
            </div>
          <label>Number of Tickets</label>
          <br/>
          <input 
            className="ticket"
            placeholder="0"
            type="number" 
            min="0" 
            value={tickets}
            onInput="validity.valid||(value='');"
            onChange={(e)=>setTickets(e.target.value)}
        />
        <button className="confirm" onClick={()=>setEther("10"*tickets)} >Confirm</button>
          <div className="">
            <div className="my-3">
              <input
                name="ether"
                type="text"
                className="inputbox"
                placeholder="Total Cost"
                value={ether}
                onChange={(e)=>setEther(e.target.value)}
                readOnly
              />
            </div>
          </div>
        </main>
        <footer className="p-4">
          <button
            type="submit"
            className="sendbtn"
          >
            Send MATIC ✨
          </button>
        </footer>       
      </div>
    </form>
  );
}
