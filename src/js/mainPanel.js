import React, {Component} from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import SubPanel from './subPanel';
import PanelTab from './panelTab';

class MainPanel extends Component {
  render() {
    const active_panel = this.props.active_panel;
    const update_method = this.props.update_method;
    const update_skills = this.props.update_skills;
    const change_panel = this.props.change_panel;
    const images = this.props.images;
    const sub_panels = [];
    const panel_tabs = [];
    const selectable_classes = this.props.selectable_classes;
    this.props.classes.forEach(function(val, index) {
      let is_active_panel = false;
      if (active_panel === index) {
        is_active_panel = true;
      }
      sub_panels.push(<SubPanel key={index} chosen_class={val} images={images} visible={is_active_panel} selectable_classes={selectable_classes} index={index} update_method={update_method} update_skills={update_skills}></SubPanel>);
      panel_tabs.push(<PanelTab key={index} chosen_class={val} change_panel={change_panel} selectable_classes={selectable_classes} visible={is_active_panel} index={index}></PanelTab>);
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
