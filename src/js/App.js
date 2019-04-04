import React, { Component } from 'react';
import Header from './header'
import SideBar from './sidebar'
import MainPanel from './mainPanel'
import '../css/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header></Header>
        <SideBar></SideBar>
        <MainPanel></MainPanel>
      </div>
    );
  }
}

export default App;
