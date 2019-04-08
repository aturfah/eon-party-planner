import React, { Component } from 'react';
import Col from 'react-bootstrap/Col';
import SubPanel from './subPanel'

class MainPanel extends Component {
    render() {
        var active_panel = this.props.active_panel;
        var update_method = this.props.update_method;
        var sub_panels = []
        this.props.classes.forEach(function(val, index) {
            console.log(val, index)
            var is_active_panel = false;
            if(active_panel === index) {
                is_active_panel = true
            }
            sub_panels.push(<SubPanel chosen_class={val} visible={is_active_panel} index={index} update_method={update_method}></SubPanel>)
        });
        console.log(sub_panels)
        return (
            <Col className="MainPanel">
                MainPanel Goes Here
                {sub_panels}
            </Col>
        );
    }
}

export default MainPanel;
