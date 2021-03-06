import React, {Component} from 'react';
import ClassDropdown from './classDropdown';
import Button from 'react-bootstrap/Button';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import skills from '../data/skills';
import SkillTab from './skillTab';
import PropTypes from 'prop-types';

import '../css/subPanel.css';


/**
 * Get requirements for a skill
 * @param {string} skillName Name of skill
 * @param {object} allSkills All skill data
 * @return {array} Array of all skill's dependencies
 */
function getRequirements(skillName, allSkills) {
  const skillData = allSkills[skillName];
  const results = [];
  const skillReqs = skillData.requires || {};

  Object.keys(skillReqs).forEach(function(value) {
    // Add skill's dependencies
    results.push(value);

    // Also account for that skills' dependencies
    getRequirements(value, allSkills).forEach(function(subValue) {
      results.push(subValue);
    });
  });
  return results;
}


/**
 * Get all skills that require a certain skill
 * @param {string} skillName Name of skill
 * @param {object} allSkills All skill data
 * @return {array} Array of all skills dependant upon skillName
 */
function getDependantUpon(skillName, allSkills) {
  const results = [];
  const allSkillNames = Object.keys(allSkills);
  allSkillNames.forEach(function(tempSkillName) {
    const skillData = allSkills[tempSkillName];
    const skillReqs = skillData.requires || {};
    if (skillReqs[skillName] || -1 > 0) {
      results.push(skillData.id);

      getDependantUpon(skillData.id, allSkills).forEach(
          function(upstreamDep) {
            results.push(upstreamDep);
          });
    }
  });

  return results;
}

/**
 * Panel that displays data for a class
 */
class SubPanel extends Component {
  /**
   * Deactivates all skills for this class.
   */
  resetSkills() {
    this.props.update_skills([], this.props.index);
  }

  /**
   * Updates skills on selection
   * @param {string} skillName Name of skill
   */
  toggleSkill(skillName) {
    console.log('NAME', skillName);
    let newSkills = this.props.chosen_skills;
    // Add skill if not active
    if (!newSkills.includes(skillName)) {
      newSkills.push(skillName);
      // Check if this skills' requirements are also met
      getRequirements(skillName, this.props.all_skills).forEach(
          function(requiredSkill) {
            if (!newSkills.includes(requiredSkill)) {
              newSkills.push(requiredSkill);
            }
          }
      );
    } else { // Remove if already active
      const toRemove = [skillName];
      getDependantUpon(skillName, this.props.all_skills).forEach(
          function(dependantSkill) {
            toRemove.push(dependantSkill);
          }
      );
      newSkills = newSkills.filter(function(value, index, arr) {
        return !toRemove.includes(value);
      });
    }

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
      // console.log(val, index);
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
        this.props.chosen_skills,
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
          <Button
            className="reset-button"
            variant="danger"
            onClick={this.resetSkills.bind(this)}>
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
  chosen_skills: PropTypes.array,
};
export default SubPanel;
