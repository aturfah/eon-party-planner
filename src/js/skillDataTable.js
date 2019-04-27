import React, {Component} from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Table from 'react-bootstrap/Table';
import PropTypes from 'prop-types';
import '../css/sidebar.css';


function generateDamageProperties() {
  return {
    physical: {
      single: {
        ranged: {
          conditonal: {
            composite: 0,
            count: 0,
            numSources: 0,
            types: [],  
          },
          unconditional: {
            composite: 0,
            count: 0,
            numSources: 0,
            types: [],  
          },
        },
        melee: {
          conditonal: {
            composite: 0,
            count: 0,
            numSources: 0,
            types: [],  
          },
          unconditional: {
            composite: 0,
            count: 0,
            numSources: 0,
            types: [],  
          },
        },
      },
      row: {
        ranged: {
          conditonal: {
            composite: 0,
            count: 0,
            numSources: 0,
            types: [],  
          },
          unconditional: {
            composite: 0,
            count: 0,
            numSources: 0,
            types: [],  
          },
        },
        melee: {
          conditonal: {
            composite: 0,
            count: 0,
            numSources: 0,
            types: [],  
          },
          unconditional: {
            composite: 0,
            count: 0,
            numSources: 0,
            types: [],  
          },
        },
      },
      pierce: {
        ranged: {
          conditonal: {
            composite: 0,
            count: 0,
            numSources: 0,
            types: [],  
          },
          unconditional: {
            composite: 0,
            count: 0,
            numSources: 0,
            types: [],  
          },
        },
        melee: {
          conditonal: {
            composite: 0,
            count: 0,
            numSources: 0,
            types: [],  
          },
          unconditional: {
            composite: 0,
            count: 0,
            numSources: 0,
            types: [],  
          },
        },
      },
      aoe: {
        ranged: {
          conditonal: {
            composite: 0,
            count: 0,
            numSources: 0,
            types: [],  
          },
          unconditional: {
            composite: 0,
            count: 0,
            numSources: 0,
            types: [],  
          },
        },
        melee: {
          conditonal: {
            composite: 0,
            count: 0,
            numSources: 0,
            types: [],  
          },
          unconditional: {
            composite: 0,
            count: 0,
            numSources: 0,
            types: [],  
          },
        },
      },
    },
    elemental: {
      fire: {
        single: {
          numSources: 0,
          count: 0
        },
        row: {
          numSources: 0,
          count: 0
        },
        pierce: {
          numSources: 0,
          count: 0
        },
        aoe: {
          numSources: 0,
          count: 0
        }
      },
      ice: {
        single: {
          numSources: 0,
          count: 0
        },
        row: {
          numSources: 0,
          count: 0
        },
        pierce: {
          numSources: 0,
          count: 0
        },
        aoe: {
          numSources: 0,
          count: 0
        }
      },
      electric: {
        single: {
          numSources: 0,
          count: 0
        },
        row: {
          numSources: 0,
          count: 0
        },
        pierce: {
          numSources: 0,
          count: 0
        },
        aoe: {
          numSources: 0,
          count: 0
        }
      },
    },
  };
}

function mergeObject(baseObj, newObj) {
  Object.keys(baseObj).forEach(function(keyName) {
    if (typeof baseObj[keyName] === 'number') {
      baseObj[keyName] += newObj[keyName];
    } else if (Array.isArray(baseObj[keyName])) {
      newObj[keyName].forEach(function(value) {
        if (!baseObj[keyName].includes(value)) {
          baseObj[keyName].push(value);
        }
      });
    } else if (typeof baseObj[keyName] === 'object') {
      baseObj[keyName] = mergeObject(baseObj[keyName], newObj[keyName]);
    }
  });

  return baseObj;
}

function mergeDamageProperties(dmgPropArray) {
  let allDamageProperties = generateDamageProperties();
  dmgPropArray.forEach(function(datum) {
    allDamageProperties = mergeObject(allDamageProperties, datum);
  });
  return allDamageProperties;
}

function generatePhysicalDmgPanelHTML(physicalDmgProps) {
  const rows = [];

  // console.log(physicalDmgProps);
  Object.keys(physicalDmgProps).forEach(function(skillTarget) {
    // console.log(skillTarget);
    const skillTargetData = physicalDmgProps[skillTarget];
    Object.keys(skillTargetData).forEach(function(skillRange) {
      const skillRangeData = skillTargetData[skillRange];
      // console.log('--', skillTarget, skillRange);
      Object.keys(skillRangeData).forEach(function(skillCondition) {
        // console.log('-- --', skillTarget, skillRange, skillCondition);
        // console.log(skillConditonCounts);
        const skillConditonCounts = skillRangeData[skillCondition];
        const skillColumns = [];
        skillColumns.push(<td>{skillTarget}</td>);
        skillColumns.push(<td>{skillRange}</td>);
        skillColumns.push(<td>{skillCondition}</td>);

        skillColumns.push(<td>{skillConditonCounts.count}</td>);
        skillColumns.push(<td>{skillConditonCounts.numSources}</td>);
        skillColumns.push(<td>{skillConditonCounts.composite}</td>);

        let dmgTypes = 'None';
        if (skillConditonCounts.types.length !== 0) {
          dmgTypes = skillConditonCounts.types.join(', ')
        }
        skillColumns.push(<td>{dmgTypes}</td>);

        rows.push(<tr>{skillColumns}</tr>);
      })
    });
  });

  return (<Table className='dmg-table' responsive="xl" size="sm">
      <thead>
        <tr>
          <th>Target</th>
          <th>Range</th>
          <th>Conditional</th>
          <th>Total Num. Skills</th>
          <th>Num. Party Members</th>
          <th>Num. Composite</th>
          <th>Damage Types</th>
        </tr>
      </thead>
      <tbody>
        {rows}
      </tbody>
    </Table>)
}

function generateElementalDmgPanelHTML(elementalDmgProps) {
  const rows = []


  Object.keys(elementalDmgProps).forEach(function(skillElement) {
    const skillRangeData = elementalDmgProps[skillElement];
    Object.keys(skillRangeData).forEach(function (skillRange) {
      const skillData = skillRangeData[skillRange];
      const skillColumns = [];
      skillColumns.push(<td>{skillElement}</td>);
      skillColumns.push(<td>{skillRange}</td>);
      skillColumns.push(<td>idk</td>);
      skillColumns.push(<td>{skillData.count}</td>);
      skillColumns.push(<td>{skillData.numSources}</td>);
      rows.push(<tr>{skillColumns}</tr>);
    });
  });

  return (<Table className='dmg-table' responsive="xl" size="sm">
  <thead>
    <tr>
      <th>Element</th>
      <th>Target</th>
      <th>Conditional</th>
      <th>Total Num. Skills</th>
      <th>Num. Party Members</th>
    </tr>
  </thead>
  <tbody>
    {rows}
  </tbody>
</Table>)
}

function createDamagePanel(chosenSkills, skillData) {
  /*
    Physical -> Un/Conditional -> Single Target/Row/Pierce/AOE -> Ranged/Melee (Single-element/Composite)
    Elemental -> Un/Conditional -> Single Target/Row/Pierce/AOE -> Fire/Ice/Elec
   */
  const dmgPropArray = [];
  [1, 2, 3, 4, 5].forEach(() => {
    dmgPropArray.push(generateDamageProperties());
  });

  chosenSkills.forEach(function(characterSkills, index) {
    console.log('Party member', index);
    const physicalContributions = [];
    const elementalContributions = [];

    characterSkills.forEach(function(chosenSkill) {
      const skillDatum = skillData[chosenSkill];
      const skillDamage = skillDatum['damage_type'] || [];
      const skillCond = (skillDatum.conditional || {})['damage_type'] || [];

      if (!skillDamage.length && !skillCond.length) {
        console.log('No Damage done by skill, skipping', chosenSkill);
        return;
      }

      // Build out that player's damageProperties
      skillDamage.forEach(function(dmgDatum) {
        const firstLayer = dmgDatum.category;
        const fourthLayer = 'unconditional';
        if (firstLayer === 'physical') {
          const secondLayer = dmgDatum.target;
          const thirdLayer = dmgDatum.range;

          const dmgTypeKey = firstLayer + secondLayer + thirdLayer + fourthLayer;
          // Account for new party member contributing this type of damage
          if (!physicalContributions.includes(dmgTypeKey)) {
            dmgPropArray[index][firstLayer][secondLayer][thirdLayer][fourthLayer].numSources += 1;
            physicalContributions.push(dmgTypeKey);
          }

          // Account for another skill of this damge type
          dmgPropArray[index][firstLayer][secondLayer][thirdLayer][fourthLayer].count += 1;

          // Specific damage type (Cut, Bash, Stab)
          if (!dmgPropArray[index][firstLayer][secondLayer][thirdLayer][fourthLayer].types.includes(dmgDatum.type)) {
            dmgPropArray[index][firstLayer][secondLayer][thirdLayer][fourthLayer].types.push(dmgDatum.type);
          }

          // Composite damage
          if ((dmgDatum.element || '') !== '') {
            dmgPropArray[index][firstLayer][secondLayer][thirdLayer][fourthLayer].composite += 1;
            // account for in elemental damage
            const elemDmgKey = elementalDamageKey(dmgDatum.element, secondLayer, fourthLayer)
            if (!elementalContributions.includes(elemDmgKey)) {
              dmgPropArray[index]['elemental'][dmgDatum.element][secondLayer].numSources += 1;
              elementalContributions.push(elemDmgKey);
            }
            dmgPropArray[index]['elemental'][dmgDatum.element][secondLayer].count += 1;
          }
        } else {
          const secondLayer = dmgDatum.element;
          const thirdLayer = dmgDatum.target;

          const dmgTypeKey =  elementalDamageKey(secondLayer, thirdLayer, fourthLayer);
          // Account for new type of damage
          if (!elementalContributions.includes(dmgTypeKey)) {
            dmgPropArray[index][firstLayer][secondLayer][thirdLayer].numSources += 1;
            elementalContributions.push(dmgTypeKey);
          }

          // Account for another skill of this damge type
          dmgPropArray[index][firstLayer][secondLayer][thirdLayer].count += 1;
        }
      });
    });
  });

  const allDamageProps = mergeDamageProperties(dmgPropArray);
  console.log(allDamageProps);
  const physDmgPanel = generatePhysicalDmgPanelHTML(allDamageProps.physical);
  const elemDmgPanel = generateElementalDmgPanelHTML(allDamageProps.elemental);
  return <div><h3>Physical Damage</h3>{physDmgPanel}<br/><h3>Elemental Damage</h3>{elemDmgPanel}</div>;
}

function elementalDamageKey(element, target, conditional) {
  return 'elemental' + element + target + conditional;
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
          <h5>{header}</h5>
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
    let displayPanel = this.createPanel();

    if (displayPanel === null) {
      displayPanel = 'This is where tables go...';
    }

    return (
      <div>
        <Row>{tabs}</Row>
        <div>
          {displayPanel}
        </div>
      </div>
    );
  }
}


SkillDataTable.propTypes = {
  skill_data: PropTypes.object,
  chosen_skills: PropTypes.array,
};

export default SkillDataTable;
