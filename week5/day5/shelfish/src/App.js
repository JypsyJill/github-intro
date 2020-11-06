import React, { Component } from 'react';

import './App.css';

export default class App extends Component {
  render() {    
    return (
      <div>
        <div className='Header'>
          <div>Header</div>
          <div className='Dashboard'>
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
