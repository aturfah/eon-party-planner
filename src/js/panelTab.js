import React, {Component} from 'react';
import Col from 'react-bootstrap/Col';
import PropTypes from 'prop-types';
import '../css/panelTab.css';

/**
 * Header tabs to click upon.
 */
class PanelTab extends Component {
  /**
   * Changes active panel
   */
  selectPanel() {
    this.props.change_panel(this.props.index);
  }

  /**
   * Renders this React class
   * @return {div} Rendered app
   */
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
      <h5>{displayClassInfo.name}|{this.props.index}</h5>
    </Col>;
  }
}

PanelTab.propTypes = {
  chosen_class: PropTypes.string,
  visible: PropTypes.bool,
  update_method: PropTypes.func,
  change_panel: PropTypes.func,
  images: PropTypes.object,
  selectable_classes: PropTypes.object,
  index: PropTypes.number,
};

export default PanelTab;
