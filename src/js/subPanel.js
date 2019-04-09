import React, { Component } from 'react';
import '../css/subPanel.css'

class SubPanel extends Component {
    constructor(props) {
        super(props);
        console.log(props)
    }

    replace_class() {
        console.log("CLICKED!!")
        var new_name = null;
        if (this.props.chosen_class === "hero") {
            new_name = "protector"
        } else {
            new_name = "hero"
        }
        this.props.update_method(new_name, this.props.index)
    }

    render() {
        let className = "SubPanel";
        if (this.props.visible === false) {
            className += ' invisible-panel'
        }

        return (
            <div className={className}>
                SubPanel Goes Here (I am {this.props.chosen_class} @ panel {this.props.index} <button onClick={this.replace_class.bind(this)} >Click Me!</button>)
            </div>
        );
    }
}

export default SubPanel;
