import React, {Component} from 'react';
import ClassDropdown from './classDropdown';
import Button from 'react-bootstrap/Button';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import skills from '../data/skills';
import SkillTab from './skillTab';
import PropTypes from 'prop-types';

import '../css/subPanel.css';


function getRequirements(skillName, allSkills) {
  let skillData = allSkills[skillName];
  let results = [];
  let skillReqs = skillData.requires || {};

  Object.keys(skillReqs).forEach(function(value) {
    console.log(skillName, "requires", value);
    // Add skill's dependencies
    results.push(value)

    // Also account for that skills' dependencies
    getRequirements(value, allSkills).forEach(function(subValue) {
      results.push(subValue)
    });
  });
  console.log("Dependencies for", skillName, results)
  return results;
}


/**
 * Panel that displays data for a class
 */
class SubPanel extends Component {
  /**
   * Initializes Panel
   * @param {Object} props Properties of object
   */
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
    // Check if skill is already active
    if (!newSkills.includes(skillName)) {
      newSkills.push(skillName);
    };

    // Check if this skills' requirements are also met
    getRequirements(skillName, this.props.all_skills).forEach(
        function(requiredSkill, index) {
          if (!newSkills.includes(requiredSkill)) {
            newSkills.push(requiredSkill);
          }
        }
    );

    console.log("New Skills", newSkills)

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
    // console.log('Hovering over ' + skillName);
  }

  /**
   * Updates skills on selection
   * @param {Array} classSkills Skills of class
   * @param {Array} chosenSkills Skills chosen by user
   * @param {Func} toggleCallback Callback function for toggling skill
   * @param {Func} hoverCallback Callback function for hovering over skill
   * @return {Array} Array of skills to display
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
  all_skills: PropTypes.object,
};
export default SubPanel;
