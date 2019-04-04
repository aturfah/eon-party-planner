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
            <Row><Header></Header></Row>
            <Row>
                <Col><SideBar></SideBar></Col>
                <Col><MainPanel></MainPanel></Col>
            </Row>
        </Container>
      </div>
    );
  }
}

export default App;
