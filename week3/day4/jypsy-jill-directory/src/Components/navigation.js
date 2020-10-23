import React, { Component } from 'react';

import '../App.css';

class Navigation extends Component {
    
  render() {
    return (
      <div className='buttons-container'>
        <button className='change-card-buttons' onClick={this.props.decrease}>&lt; Previous</button>
        <div className='edit-card-buttons-container'>
          <button className='edit-card-buttons'>Edit</button>
          <button className='edit-card-buttons'>Delete</button>
          <button className='edit-card-buttons'>New</button>
        </div>
        <button className='change-card-buttons' onClick={this.props.increase}>Next &gt; </button>
      </div>
    )
  }
}


export default Navigation;