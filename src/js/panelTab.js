import React, { Component } from 'react';
import Col from 'react-bootstrap/Col';
import '../css/panelTab.css'

class PanelTab extends Component {
    select_panel() {
        this.props.change_panel(this.props.index);
    }

    render() {
        // console.log(this.props.chosen_class, this.props.visible, this.props.index);
        // console.log(this.props.selectable_classes);
        var displayClassInfo = this.props.selectable_classes[this.props.chosen_class];
        var classes = "panelTab ";
        if (this.props.visible === true) {
            classes = classes + "activeTab";
        } else {
            classes = classes + "inactiveTab";
        }

        return <Col className={classes} onClick={this.select_panel.bind(this)}>
            <h6>{displayClassInfo.name}|{this.props.index}</h6>
        </Col>
    }
}

export default PanelTab;