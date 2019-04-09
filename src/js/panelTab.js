import React, { Component } from 'react';
import Col from 'react-bootstrap/Col';
import '../css/panelTab.css'

class PanelTab extends Component {
    render() {
        console.log(this.props.chosen_class, this.props.visible, this.props.index);
        return <Col className='panelTab'>{this.props.chosen_class}|{this.props.visible}|{this.props.index} </Col>
    }
}

export default PanelTab;