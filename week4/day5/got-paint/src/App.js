import './App.css';
import React from "react";
import VanGogh from "./components/Header";
import Vermeer from "./components/Primer";
import Degas from "./components/Timing";

import axios from "axios";
import OKeefe from './components/DryBrush';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      catalogue: [],
    };

    this.addColors = this.addColors.bind(this);
  }

  componentDidMount() {
    axios
    .get("/api/catalogue")
    .then((res) => {
      this.setState({ catalogue: res.data });
    })
    .catch((err) => console.log(err));
  }

  addColors(id){
    axios
    .post(`/api/catalogue/${id}`)
    .then((res) => {
      this.setState({ catalogue: res.data });
    })
    .catch((err) => console.log(err));
  };

  editArt = (id, name) => {
    axios 
    .then((res) => {
      this.setState({ catalogue: res.data });
    })
    .catch((err) => console.log(err));
  };
  
  render() {
  return (
    <div>
      <VanGogh />
        <title className="title-page">
          <Vermeer
          catalogue={this.state.catalogue}
          endProject={this.endProject}
          editArt={this.editArt}
          />
          <OKeefe/>
          <Degas addColors={this.addColors} catal={this.state.degas}/>
        </title>
    </div>
  );
}
}

export default App;
