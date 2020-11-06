import React, { Component } from 'react';
import axios from 'axios'
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)

    this.state= {
      prodName: [],
      price: 0,
      imageURL: ''

    };
  }

  newPicture( value ) {
    this.setState({ imageURL: value });
  }

  newProduct( value ) {
    this.setState({ prodName: value });
  }

  newProdPrice( value ) {
    this.setState({ price: value });
  }

  addProduct() {
    const { product, name, price, imageURL } = this.state;

    let newProducts = product.slice();
    newProducts.push({ name, price, imageURL });

    this.setState({ product: newProducts, name: '', price: +1 , imageURL: '' });
  }

  
  render() {    
    return (
      <div>
        <div className='Header'>
          <div>Header</div>
          <div className='Dashboard'>
            <span> Image URL: </span>
            <input onChange={ ( e ) => this.newPicture( e.target.value ) } value={ this.state.imageURL } />
            <span> Product Name:</span>
            <input onChange={ ( e ) => this.newProduct( e.target.value ) } value={ this.state.prodName } />
            <span> Price: </span>
            <input onChange={ ( e ) => this.newProdPrice( e.target.value ) } value={ this.state.price } />

            <button> Cancel </button>
            <button> Add to Inventory </button>
            <div>Dashboard</div>
            <div className='Form'>
              <div>Form</div>
              <div> Product </div>
            </div>
          </div>

        </div>
      </div>  
     );
  }

}

export default App;
