import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import React, {Component} from 'react';

class ClassDropdown extends Component {
  panelSelect(event) {
    const parsed_event = event.split('|');
    this.props.update_method(parsed_event[0], parseInt(parsed_event[1]));
  }

  render() {
    const active_class = this.props.active_class;
    const panel_select_func = this.panelSelect.bind(this);
    const panel_index = this.props.panel_index;
    const dropdown_options = [];
    const class_data = this.props.selectable_classes;
    Object.keys(this.props.selectable_classes).sort().forEach(function(val, index) {
      let active_flag = false;
      if (val === active_class) {
        active_flag = true;
      }
      const display_name = class_data[val].name;
      const object_key = val + '|' + panel_index;
      dropdown_options.push(
          <Dropdown.Item key={object_key} eventKey={object_key} disabled={active_flag}>{display_name}</Dropdown.Item>
      );
    });

    return <DropdownButton onSelect={panel_select_func} title={this.props.selectable_classes[this.props.active_class].name}>
      {dropdown_options}
    </DropdownButton>;
  }
}

export default ClassDropdown;
