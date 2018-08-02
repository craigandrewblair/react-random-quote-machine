import React, { Component } from 'react';
import './App.css';
import Machine from './Components/Machine';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      color: 'rgb(34,193,195)'
    }
    this.randomRGB = this.randomRGB.bind(this);
  }

  randomRGB() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    const rgb = "rgb(" + r + "," + g + "," + b + ")";
    this.setState({
      color: rgb
    });
  }

  render() {
    return (
      <div className="App animated" style={{backgroundColor: this.state.color}}>
        <header className="App-header">
          <h1 className='App-title'>React Quote Machine</h1>
        </header> 
        <div id='quote-box'>
          <Machine randomRGB={this.randomRGB} color={this.state.color}/>
        </div>
        <div className='App-footer'>
          <div>By Craig Blair &copy; 2018</div>
          <div>Icons by <a href="https://www.flaticon.com/authors/dave-gandy" title="Dave Gandy">Dave Gandy</a> & <a href="http://www.freepik.com" title="Freepik">Freepik</a></div>
        </div>
      </div>
    )
  }
}

export default App;
