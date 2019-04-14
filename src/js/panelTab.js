import React, {Component} from 'react';
import Col from 'react-bootstrap/Col';
import '../css/panelTab.css';

class PanelTab extends Component {
  selectPanel() {
    this.props.change_panel(this.props.index);
  }

  render() {
    const chosenClassId = this.props.chosen_class;
    const displayClassInfo = this.props.selectable_classes[chosenClassId];
    let classes = 'panelTab ';
    if (this.props.visible === true) {
      classes = classes + 'activeTab';
    } else {
      classes = classes + 'inactiveTab';
    }

    return <Col className={classes} onClick={this.selectPanel.bind(this)}>
      <h6>{displayClassInfo.name}|{this.props.index}</h6>
    </Col>;
  }
}

export default PanelTab;
