import React, { Component } from 'react';
import Header from './header';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import SideBar from './sidebar';
import MainPanel from './mainPanel';
import '../css/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Container>
            <Row>
                <Col>1 of 2</Col>
                <Col>2 of 2</Col>
            </Row>
            <Row>
                <Col>1 of 3</Col>
                <Col>2 of 3</Col>
                <Col>3 of 3</Col>
            </Row>
        </Container>
        <Header></Header>
        <SideBar></SideBar>
        <MainPanel></MainPanel>
      </div>
    );
  }
}

export default App;
