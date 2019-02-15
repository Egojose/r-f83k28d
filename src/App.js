import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor() {
    super();

    this.state = {
      count: 0
    }
  }
  render() {
    return (
      <div>
        <span className="value">{this.state.count}</span>
        <button id="inc"onClick={this.counter.bind(this)}>Incrementa</button>
      </div>
    );
  }

  counter(){
    let contar = this.state.count;
    let nuevaCuenta = contar + 1;
    this.setState({
      count: nuevaCuenta
    });
  }
}

export default App;
