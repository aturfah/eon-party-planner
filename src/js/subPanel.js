import React, { Component } from 'react';
import '../css/subPanel.css'

class SubPanel extends Component {
    render() {
        let className = "SubPanel";
        if (this.props.visible === false) {
            className += ' invisible-panel'
        }

        return (
            <div className={className}>
                SubPanel Goes Here (I am {this.props.visible})
            </div>
        );
    }
}

export default SubPanel;
