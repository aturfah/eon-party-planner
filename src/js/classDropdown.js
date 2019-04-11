import Dropdown from 'react-bootstrap/Dropdown';
import React, { Component } from 'react';

class ClassDropdown extends Component {
    constructor(props) {
        super(props)
        console.log(props)
    }

    panelSelect(event) {
        var parsed_event = event.split("|");
        this.props.update_method(parsed_event[0], parseInt(parsed_event[1]))
    }

    render() {
        var active_class = this.props.active_class
        var panel_select_func = this.panelSelect.bind(this);
        var panel_index = this.props.panel_index
        var dropdown_options = []
        var class_data = this.props.selectable_classes;
        Object.keys(this.props.selectable_classes).sort().forEach(function(val, index) {
            var active_flag = false;
            if (val === active_class) {
                active_flag = true;
            }
            var display_name = class_data[val].name;
            dropdown_options.push(
                <Dropdown.Item eventKey={val + "|" + panel_index} disabled={active_flag}>{display_name}</Dropdown.Item>
            )
        });

        return <Dropdown onSelect={panel_select_func}>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
                {this.props.selectable_classes[this.props.active_class].name}
            </Dropdown.Toggle>

            <Dropdown.Menu>
                {dropdown_options}
            </Dropdown.Menu>
        </Dropdown>
    }
}

export default ClassDropdown;
