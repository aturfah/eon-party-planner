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
        var selectedClass = this.props.selectable_classes[this.props.chosen_class];
        var image_url = this.props.images[this.props.chosen_class + '.png'];

        return (
            <div className={className}>
                SubPanel Goes Here (I am {selectedClass.name} @ panel {this.props.index} <button onClick={this.replace_class.bind(this)} >Click Me!</button>)

                <img src={image_url} alt={selectedClass.name + " Image"} height='250px'></img>

            </div>
        );
    }
}

export default SubPanel;
