import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import React, {Component} from 'react';
import PropTypes from 'prop-types';

/**
 * Dropdown element for class selection
 */
class ClassDropdown extends Component {
  /**
   * Changes class in active panel
   * @param {String} event Composite key of class/panel number to update
   */
  panelSelect(event) {
    const parsedEvent = event.split('|');
    this.props.update_method(parsedEvent[0], parseInt(parsedEvent[1]));
  }

  /**
   * Renders this React class
   * @return {div} Rendered dropdown button
   */
  render() {
    const activeClass = this.props.active_class;
    const panelSelectFunc = this.panelSelect.bind(this);
    const panelIndex = this.props.panel_index;
    const dropdownOptions = [];
    const classData = this.props.selectable_classes;
    const selectableClasses = Object.keys(this.props.selectable_classes);
    selectableClasses.sort().forEach(function(val, index) {
      let activeFlag = false;
      if (val === activeClass) {
        activeFlag = true;
      }
      const displayName = classData[val].name;
      const objectKey = val + '|' + panelIndex;
      dropdownOptions.push(
          <Dropdown.Item
            key={objectKey}
            eventKey={objectKey}
            disabled={activeFlag}>
            {displayName}
          </Dropdown.Item>
      );
    });

    return (
      <DropdownButton
        onSelect={panelSelectFunc}
        title={this.props.selectable_classes[this.props.active_class].name}>
        {dropdownOptions}
      </DropdownButton>
    );
  }
}

ClassDropdown.propTypes = {
  active_class: PropTypes.string,
  selectable_classes: PropTypes.array,
  update_method: PropTypes.func,
  panel_index: PropTypes.number,
};

export default ClassDropdown;
