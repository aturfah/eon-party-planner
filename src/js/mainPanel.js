import React, { Component } from 'react';
import Col from 'react-bootstrap/Col';
import SubPanel from './subPanel'

class MainPanel extends Component {
    render() {
        return (
            <Col className="MainPanel">
                MainPanel Goes Here
                <SubPanel visible={true}></SubPanel>
                <SubPanel visible={false}></SubPanel>
                <SubPanel visible={false}></SubPanel>
                <SubPanel visible={false}></SubPanel>
                <SubPanel visible={false}></SubPanel>
            </Col>
        );
    }
}

export default MainPanel;
