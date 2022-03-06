import './Upload.css'
import { useState } from "react";
import { create } from "ipfs-http-client";
import React from 'react';

const client = create("https://ipfs.infura.io:5001/api/v0");

const Upload = () => {
  const [file, setFile] = useState(null);
  const [urlArr, setUrlArr] = useState([]);

  const retrieveFile = (e) => {
    const data = e.target.files[0];
    const reader = new window.FileReader();
    reader.readAsArrayBuffer(data);

    reader.onloadend = () => {
      setFile(Buffer(reader.result));
    };

    e.preventDefault();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const created = await client.add(file);
      const url = `https://ipfs.io/ipfs/${created.path}`;
      var hash = `${created.path}`
      setUrlArr((prev) => [...prev, url]);
      document.getElementById("hash").innerHTML=hash
    } catch (error) {
      console.log(error.message);
    }
  };

  const copytext = () =>{
    var copyText = document.getElementById("hash");
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(copyText.value);
  }

  return (
    <div className="bigcard">
      <div>
        <form onSubmit={handleSubmit}>
          <input type="file" onChange={retrieveFile} className='uploadbtn' />
          <div className='submitcont'>
            <button className='submitbtn' type="submit">Upload to IPFS <i class="fa fa-upload"></i> </button>
          </div>
          
        </form>
        <div>
        {urlArr.length !== 0
          ? urlArr.map((el) => 
          <div>
              <a href={el} target="_blank" >
              <button className='submitbtn' >Preview File</button></a>
              <br/>
              <label onClick={copytext} id="hash" className='hash' ></label><button><i class="fa fa-copy"></i></button>
          </div>  
          )
          : <label className='help' >Press the above button to upload</label>}

        </div>
        <br/>
        <label className='help' >Note: Refresh after every file upload</label>
      </div>
    </div>
  );
};

export default Upload;