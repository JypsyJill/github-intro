import React, { Component } from 'react';
import './reset.css';
import './App.css';
import EmployeeCard from './Components/employeeCard';
import Navigation from './Components/navigation';
import data from  './Data/data';

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: data,
      userNumber: 0
    }
  }

  increaseNum = () => {
    if(this.state.userNumber === 24) {
      this.setState({
        userNumber: 0
      });
    } else {
      this.setState({
        userNumber: this.state.userNumber + 1
      });
    }
    }
  
    decreaseNum = () => {
      if(this.state.userNumber === 0) {
        this.setState({
          userNumber: 24
        })
      } else {
        this.setState({
          userNumber: this.state.userNumber -1
        })
      }
    }

  render() {
    const {data, userNumber} = this.state
    return (
    <div>
     <header>
          <h2>Home</h2>
     </header>
      <body>
        <div className='content'>
        <EmployeeCard user={data[userNumber]}/> 
        <Navigation increase={this.increaseNum} decrease={this.decreaseNum} />
        </div>
      </body>
    </div>
  );
}
}


export default App;
