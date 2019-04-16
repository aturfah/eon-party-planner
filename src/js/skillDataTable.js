import React, {Component} from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import PropTypes from 'prop-types';

function createTabs(tabCallback) {
  const results = []
  const headers = ['Damage', 'DPS Support',
                   'Damage Mitigation', 'Healing',
                   'Lockdown'];
  headers.forEach(function(header, index) {
    const headerTab = (
    <Col key={index}
      onClick={() => tabCallback(index)}>
        {header}
      </Col>
    );
    results.push(headerTab);
  });

  return results
}

class SkillDataTable extends Component {
  constructor(props) {
    super(props);

    console.log(props);
    this.state = {
      activePanel: 0
    }
  }

  changeTab(index) {
    const newState = this.state;
    newState.activePanel = index;
    this.setState(newState);
  }

  render() {
    const tabs = createTabs(this.changeTab.bind(this));

    return (
      <div>
      <Row>{tabs}</Row>
      <Row>
        This is where tables go...
      </Row>
      </div>
    )
  }
}


SkillDataTable.propTypes = {
  skill_data: PropTypes.object,
  chosen_skills: PropTypes.array,
};

export default SkillDataTable;