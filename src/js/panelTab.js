import React, { Component } from 'react';
import Col from 'react-bootstrap/Col';
import '../css/panelTab.css'

class PanelTab extends Component {
    select_panel() {
        this.props.change_panel(this.props.index);
    }

    render() {
        console.log(this.props.chosen_class, this.props.visible, this.props.index);
        return <Col className='panelTab' onClick={this.select_panel.bind(this)}>{this.props.chosen_class}|{this.props.visible}|{this.props.index} </Col>
    }
}

export default PanelTab;