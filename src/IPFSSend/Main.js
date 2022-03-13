import React, { Component } from 'react';

class Main extends Component {

  render() {
    return (
      <div className='listcard'>
        <h1 className='listtitle' >Send Document</h1>
        <form onSubmit={(event) => {
          event.preventDefault()
          const name = this.productName.value
          const receiver = this.productReceiver.value
          const cert = this.productCert.value
          const price = window.web3.utils.toWei(this.productPrice.value.toString(), 'Ether')
          this.props.createProduct(name, receiver, cert, price)
        }}>

          <div className='two-col' >
            <div className='col1'>
              <input
                id="productName"
                type="text"
                ref={(input) => { this.productName = input }}
                className="form-control"
                placeholder="Document Description"
                required />
            </div>
            <div className='col2'>
              <input
                id="productReceiver"
                type="text"
                ref={(input) => { this.productReceiver = input }}
                className="form-control"
                placeholder="Recepient Address"
                required />
            </div>
          </div>

          <div className='two-col'>
          <div className='col1'>
            <input
              id="productCert"
              type="text"
              ref={(input) => { this.productCert = input }}
              className="form-control"
              placeholder="Document Hash"
              required />
          </div>
                    
          <div className='col2'>
            <input
              id="productPrice"
              type="text"
              ref={(input) => { this.productPrice = input }}
              className="form-control"
              placeholder="Amount to be transferred (Enter 0 if N/A)"
              required />
          </div>

          </div>
          
         
          <button type="submit" className="sendfile">Add Product</button>
        </form>
        <p>&nbsp;</p>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Description</th>
              <th scope="col">Receiver</th>
              <th scope="col">File</th>
              <th scope="col">Owner</th>
              <th scope="col">Amount to be transferred(if applicable)</th>
            </tr>
          </thead>
          <tbody id="productList">
            { this.props.products.map((product, key) => {
              return(
                <tr key={key}>
                  <th scope="row">{product.id.toString()}</th>
                  <td>{product.name}</td>
                  <td>{product.receiver.slice(0,6)}...{product.receiver.slice(38)}</td>
                  <td><a href={"https://ipfs.io/ipfs/" + product.cert} onclick="location.href=this.href+{product.cert};return false;" ><button className='viewfile' >View File</button></a></td>
                  <td>{product.owner.slice(0,6)}{'...'}{product.owner.slice(38)}</td>
                  <td>{window.web3.utils.fromWei(product.price.toString(), 'Ether')}</td>
                  
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Main;
