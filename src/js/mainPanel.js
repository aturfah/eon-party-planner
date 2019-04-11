import React, { Component } from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import SubPanel from './subPanel'
import PanelTab from './panelTab'

class MainPanel extends Component {
    render() {
        var active_panel = this.props.active_panel;
        var update_method = this.props.update_method;
        var change_panel = this.props.change_panel;
        var images = this.props.images;
        var sub_panels = []
        var panel_tabs = []
        var selectable_classes = this.props.selectable_classes
        this.props.classes.forEach(function(val, index) {
            // console.log(val, index)
            var is_active_panel = false;
            if(active_panel === index) {
                is_active_panel = true
            }
            sub_panels.push(<SubPanel key={index} chosen_class={val} images={images} visible={is_active_panel} selectable_classes={selectable_classes} index={index} update_method={update_method}></SubPanel>)
            panel_tabs.push(<PanelTab key={index} chosen_class={val} change_panel={change_panel} selectable_classes={selectable_classes} visible={is_active_panel} index={index}></PanelTab>)
        });

        return (
            <Col className="MainPanel">
                <Row>{panel_tabs}</Row>
                {sub_panels}
            </Col>
        );
    }
}

export default MainPanel;
