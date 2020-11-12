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
  getProducts() {
    axios.get('wr6-lecture/shelfish').then( results => {
      this.setState({ 'prodDisplay': results.data });
    }).catch( () => console.log.error("failed at fetching products") );
  }

  addProduct() {
    let newProduct = {
      product_id: 19,
      product_Name: this.prodName.value,
      price: this.price.value,
      image_url: this.imageURL.value
    };
    axios.post('wr6-lecture/shelfish', newProduct).then( results => {
      console.log.success("HOLY CRAP, YOU DID IT!!!")
      this.setState({ prodDisplay: results.data.products});
    }).catch( () => console.log('failed to add new product') );
  }

  cancelAdd() {
    this.setState({ name : '', price: 0, imageURL: ''});

  }
  
  render() {    
    return (
      <div>
        <div className='Header'>
          <div>Header</div>
          <div className='Dashboard'>
            <div>Dashboard</div>
            <span> Image URL: </span>
            <input />
            <span> Product Name:</span>
            <input />
            <span> Price: </span>
            <input />

            <button onClick={this.state.cancelAdd} > Cancel </button>
            <button> Add to Inventory </button>
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
