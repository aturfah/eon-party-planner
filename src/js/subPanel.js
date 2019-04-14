import React, {Component} from 'react';
import ClassDropdown from './classDropdown';
import Button from 'react-bootstrap/Button';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import skills from '../data/skills';
import SkillTab from './skillTab';
import PropTypes from 'prop-types';

import '../css/subPanel.css';

/**
 * Panel that displays data for a class
 */
class SubPanel extends Component {
  constructor(props) {
    super(props);

    this.state = {
      'chosenSkills': [],
    };
  }

  /**
   * Updates skills on selection
   * @param {string} skillName Name of skill
   */
  toggleSkill(skillName) {
    console.log('NAME', skillName);
    const newSkills = this.state.chosenSkills;
    if (!newSkills.includes(skillName)) {
      newSkills.push(skillName);
    };
    this.setState({
      'chosenSkills': newSkills,
    });
    this.props.update_skills(newSkills, this.props.index);
  }

  /**
   * Toggles on skill hover
   * @param {string} skillName Name of skill
   */
  toggleSkillHover(skillName) {
    if (skillName === null) {
      return;
    }
    console.log('Hovering over ' + skillName);
  }

  /**
   * Updates skills on selection
   * @param {Array} classSkills Skills of class
   * @param {Array} chosenSkills Skills chosen by user
   * @param {Func} toggleCallback Callback function for toggling skill
   * @param {Fimc} hoverCallback Callback function for hovering over skill
   */
  buildSkillMenu(classSkills, chosenSkills, toggleCallback, hoverCallback) {
    const output = [];
    classSkills.forEach(function(val, index) {
      console.log(val, index);
      const skillData = skills[val];
      let activeSkill = false;
      if (chosenSkills.includes(val)) {
        activeSkill = true;
      }
      output.push(
          <SkillTab
            key={val}
            active={activeSkill}
            updateCallback={toggleCallback}
            hoverCallback={hoverCallback}
            skillData={skillData}>
          </SkillTab>
      );
    });
    return output;
  }

  /**
   * Renders this React class
   * @return {div} Rendered app
   */
  render() {
    let className = 'SubPanel';
    if (this.props.visible === false) {
      className += ' invisible-panel';
    } else {
      className += ' visible-panel';
    }
    const selectableClasses = this.props.selectable_classes;
    const selectedClass = selectableClasses[this.props.chosen_class];
    const classSkills = selectedClass.skills;

    const skillMenu = this.buildSkillMenu(classSkills,
        this.state.chosenSkills,
        this.toggleSkill.bind(this),
        this.toggleSkillHover.bind(this));

    return (
      <div className={className}>
        <ButtonToolbar>
          <ClassDropdown
            selectable_classes={selectableClasses}
            update_method={this.props.update_method}
            panel_index={this.props.index}
            active_class={this.props.chosen_class}>
          </ClassDropdown>
          <Button className="reset-button" variant="danger">
            Reset Skills
          </Button>
        </ButtonToolbar>

        (I am {selectedClass.name} @ panel {this.props.index})
        {skillMenu}

      </div>
    );
  }
}

SubPanel.propTypes = {
  update_skills: PropTypes.func,
  index: PropTypes.number,
  visible: PropTypes.bool,
  selectable_classes: PropTypes.object,
  chosen_class: PropTypes.string,
  update_method: PropTypes.func,
};
export default SubPanel;
