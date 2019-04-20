import React, {Component} from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import PropTypes from 'prop-types';
import '../css/sidebar.css';


function createDamagePanel(chosenSkills, skillData) {
  /*
    Physical -> Un/Conditional -> Single Target/Row/Pierce/AOE -> Ranged/Melee (Single-element/Composite)
    Elemental -> Un/Conditional -> Single Target/Row/Pierce/AOE -> Fire/Ice/Elec
   */
  const damageProperties = {
    conditonal: {
      single: {
        ranged: {
          composite: 0,
          count: 0,
          num_types: 0,
        },
        melee: {
          composite: 0,
          count: 0,
          num_types: 0,
        },
      },
      row: {
        ranged: {
          composite: 0,
          count: 0,
          num_types: 0,
        },
        melee: {
          composite: 0,
          count: 0,
          num_types: 0,
        },
      },
      pierce: {
        ranged: {
          composite: 0,
          count: 0,
          num_types: 0,
        },
        melee: {
          composite: 0,
          count: 0,
          num_types: 0,
        },
      },
      aoe: {
        ranged: {
          composite: 0,
          count: 0,
          num_types: 0,
        },
        melee: {
          composite: 0,
          count: 0,
          num_types: 0,
        },
      },
    },
    unconditional: {
      single: {
        ranged: {
          composite: 0,
          count: 0,
          num_types: 0,
        },
        melee: {
          composite: 0,
          count: 0,
          num_types: 0,
        },
      },
      row: {
        ranged: {
          composite: 0,
          count: 0,
          num_types: 0,
        },
        melee: {
          composite: 0,
          count: 0,
          num_types: 0,
        },
      },
      pierce: {
        ranged: {
          composite: 0,
          count: 0,
          num_types: 0,
        },
        melee: {
          composite: 0,
          count: 0,
          num_types: 0,
        },
      },
      aoe: {
        ranged: {
          composite: 0,
          count: 0,
          num_types: 0,
        },
        melee: {
          composite: 0,
          count: 0,
          num_types: 0,
        },
      },
    },
  };
  const dmgPropArray = [];
  [1, 2, 3, 4, 5].forEach(() => {
    dmgPropArray.push(damageProperties);
  });

  chosenSkills.forEach(function(characterSkills, index) {
    characterSkills.forEach(function(chosenSkill) {
      const skillDatum = skillData[chosenSkill];
      const skillDamage = skillDatum['damage_type'] || [];
      const skillCond = (skillDatum.conditonal || {})['damage_type'] || [];

      if (!skillDamage.length && !skillCond.length) {
        console.log('No Damage done by skill', chosenSkill);
        return;
      }
      console.log('Party member', index);
      console.log(skillDamage);
      console.log(skillCond);

      // Build out that player's damageProperties
    });
  });

  console.log(dmgPropArray);

  return [];
}

/**
 * Table that renders with relevant skill data
 */
class SkillDataTable extends Component {
  /**
   * Initializes SkillDataTable
   * @param {Object} props Properties of object
   */
  constructor(props) {
    super(props);

    this.headers = ['Damage', 'DPS Support',
      'Damage Mitigation', 'Healing',
      'Lockdown'];
    this.state = {
      activePanel: 0,
    };
  }

  /**
   * Sets the tab to be displayed
   * @param {Int} index Index in headers of panel
   */
  changeTab(index) {
    if (index === this.state.activePanel) {
      return;
    }
    console.log('Changing to tab', index);
    const newState = this.state;
    newState.activePanel = index;
    this.setState(newState);
  }

  /**
   * Renders table based on active panel
   */
  createPanel() {
    console.log(this.props.chosen_skills);
    let output = null;
    const switchCondition = this.headers[this.state.activePanel];
    switch (switchCondition) {
      case 'Damage':
        console.log(switchCondition);
        output = createDamagePanel(this.props.chosen_skills,
            this.props.skill_data);
        break;
      case 'DPS Support':
        console.log(switchCondition);
        break;
      case 'Damage Mitigation':
        console.log(switchCondition);
        break;
      case 'Healing':
        console.log(switchCondition);
        break;
      case 'Lockdown':
        console.log(switchCondition);
        break;
      default:
        throw Error;
    }

    return output;
  }

  /**
   * Creates headers for tabs
   * @param {Array} headers Panel titles
   * @param {Func} clickCallback Callback function on click
   * @return {Array} Array of panel headers
   */
  createTabs() {
    const results = [];
    const clickCallback = this.changeTab.bind(this);
    this.headers.forEach(function(header, index) {
      const headerTab = (
        <Col key={index} className="sidebar-tab-label"
          onClick={() => clickCallback(index)}>
          {header}
        </Col>
      );
      results.push(headerTab);
    });

    return results;
  }

  /**
   * Renders this React class
   * @return {div} Rendered app
   */
  render() {
    const tabs = this.createTabs();
    const displayPanel = this.createPanel();

    return (
      <div>
        <Row>{tabs}</Row>
        <Row>
        This is where tables go...
          {displayPanel}
        </Row>
      </div>
    );
  }
}


SkillDataTable.propTypes = {
  skill_data: PropTypes.object,
  chosen_skills: PropTypes.array,
};

export default SkillDataTable;
