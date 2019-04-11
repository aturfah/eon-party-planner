import React, { Component } from 'react';
import ClassDropdown from './classDropdown';
import Button from 'react-bootstrap/Button';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';

import '../css/subPanel.css'

class SubPanel extends Component {
    constructor(props) {
        super(props);

        this.state = {
            "chosenSkills": []
        }
    }

    toggleSkill(skillName) {
        console.log(skillName);
        var newSkills = this.state.chosenSkills;
        if (!newSkills.includes(skillName)) {
            newSkills.push(skillName);
        }
        this.setState({
            "chosenSkills": newSkills
        });
    }


    render() {
        let className = "SubPanel";
        if (this.props.visible === false) {
            className += ' invisible-panel'
        } else {
            className += ' visible-panel'
        }
        var selectedClass = this.props.selectable_classes[this.props.chosen_class];
        var classSkills = selectedClass.skills;

        console.log(classSkills)
        var skillMenu = []

        return (
            <div className={className}>
                <ButtonToolbar>
                    <ClassDropdown selectable_classes={this.props.selectable_classes} update_method={this.props.update_method} panel_index={this.props.index} active_class={this.props.chosen_class}></ClassDropdown>
                    <Button  className="reset-button" variant="danger">Reset Skills</Button>
                </ButtonToolbar>
                
                (I am {selectedClass.name} @ panel {this.props.index})
                {skillMenu}

            </div>
        );
    }
}

export default SubPanel;
